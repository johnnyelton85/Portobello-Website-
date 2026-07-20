"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { ArrowRight, ImagePlus, LoaderCircle, X } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

const MAX_PHOTOS = 5;
const MAX_SOURCE_BYTES = 25 * 1024 * 1024; // 25MB per selected file before compression
const MAX_EDGE = 1600; // longest edge after resize
const ACCEPTED = ["image/jpeg", "image/png", "image/webp", "image/heic"];

async function compressImage(file: File): Promise<File> {
  // Skip files the browser can't decode into a canvas (e.g. heic) — send as-is.
  if (typeof createImageBitmap !== "function" || file.type === "image/heic") {
    return file;
  }

  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_EDGE / Math.max(bitmap.width, bitmap.height));
    const width = Math.round(bitmap.width * scale);
    const height = Math.round(bitmap.height * scale);

    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) return file;
    ctx.drawImage(bitmap, 0, 0, width, height);

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", 0.82),
    );
    if (!blob) return file;

    const newName = file.name.replace(/\.[^.]+$/, "") + ".jpg";
    return new File([blob], newName, { type: "image/jpeg" });
  } catch {
    return file;
  }
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoError, setPhotoError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    setPhotoError(null);
    const selected = Array.from(event.target.files ?? []);
    if (selected.length === 0) return;

    const valid: File[] = [];
    for (const file of selected) {
      if (!ACCEPTED.includes(file.type)) {
        setPhotoError("Please choose image files (JPG, PNG, WEBP or HEIC).");
        continue;
      }
      if (file.size > MAX_SOURCE_BYTES) {
        setPhotoError("Each photo needs to be under 25MB.");
        continue;
      }
      valid.push(file);
    }

    setPhotos((current) => {
      const combined = [...current, ...valid];
      if (combined.length > MAX_PHOTOS) {
        setPhotoError(`You can add up to ${MAX_PHOTOS} photos.`);
        return combined.slice(0, MAX_PHOTOS);
      }
      return combined;
    });

    // Reset the input so the same file can be re-selected if removed.
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  function removePhoto(index: number) {
    setPhotoError(null);
    setPhotos((current) => current.filter((_, i) => i !== index));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);
    // Remove the raw file input value; we append compressed versions instead.
    data.delete("photos");

    try {
      const compressed = await Promise.all(photos.map(compressImage));
      compressed.forEach((file) => data.append("photos", file, file.name));

      const response = await fetch("/api/contact", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setPhotos([]);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
          />
        </div>
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="message">How can we help?</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tell us a little about the job..."
          required
        />
      </div>
      <div className="field">
        <label htmlFor="photos">Add photos of the job (optional)</label>
        <input
          ref={fileInputRef}
          id="photos"
          name="photos"
          type="file"
          className="field__file"
          accept="image/*"
          multiple
          onChange={handlePhotoChange}
        />
        <label htmlFor="photos" className="photo-drop">
          <ImagePlus size={20} aria-hidden="true" />
          <span>
            {photos.length > 0
              ? "Add more photos"
              : "Tap to add photos of the problem"}
          </span>
        </label>
        {photos.length > 0 && (
          <ul className="photo-list">
            {photos.map((file, index) => (
              <li key={`${file.name}-${index}`} className="photo-chip">
                <span className="photo-chip__name">{file.name}</span>
                <button
                  type="button"
                  className="photo-chip__remove"
                  onClick={() => removePhoto(index)}
                  aria-label={`Remove ${file.name}`}
                >
                  <X size={14} aria-hidden="true" />
                </button>
              </li>
            ))}
          </ul>
        )}
        {photoError && (
          <p className="form-status form-status--error">{photoError}</p>
        )}
      </div>
      <div className="field field--trap" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <button
        className="button"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? (
          <>
            <LoaderCircle size={18} aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            Send enquiry
            <ArrowRight size={18} aria-hidden="true" />
          </>
        )}
      </button>
      <div aria-live="polite">
        {status === "success" && (
          <p className="form-status form-status--success">
            Thanks — your request has been received. We&apos;ll be in touch.
          </p>
        )}
        {status === "error" && (
          <p className="form-status form-status--error">
            Something went wrong. Please call 027 549 9090 instead.
          </p>
        )}
      </div>
    </form>
  );
}
