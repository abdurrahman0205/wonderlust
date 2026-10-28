/**
 * Google "G" logo — inline SVG in brand colors, used by the
 * sign-up / sign-in pages ("Sign In With Google" buttons).
 */
export function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.496 12.269c0-.815-.073-1.6-.21-2.352H12v4.45h6.423a5.493 5.493 0 0 1-2.384 3.606v3h3.858c2.257-2.079 3.599-5.14 3.599-8.704Z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.229 0 5.94-1.07 7.92-2.902l-3.858-3c-1.071.72-2.44 1.144-4.062 1.144-3.126 0-5.778-2.112-6.716-4.951H1.393v3.098A11.994 11.994 0 0 0 12 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.284 14.291a7.2 7.2 0 0 1 0-4.582v-3.09H1.393a11.994 11.994 0 0 0 0 10.763l3.891-3.091Z"
      />
      <path
        fill="#EA4335"
        d="M12 4.768c1.763 0 3.344.606 4.589 1.795l3.44-3.44C17.94 1.13 15.228.001 12 .001A11.994 11.994 0 0 0 1.393 6.619l3.891 3.09C6.222 6.88 8.874 4.768 12 4.768Z"
      />
    </svg>
  );
}
