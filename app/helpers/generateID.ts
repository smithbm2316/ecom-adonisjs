import { customAlphabet } from "nanoid";

/**
 * Custom nanoid generator function that uses a custom alphabet (no dashes `-`) to generate a new collision-resistant id using the `nanoid` package. This way we have human-friendly IDs that are also easily double-clickable in URL bars
 * @param size how many characters for the generated ID to be (default 12)
 *
 * @returns newly generated ID
 */
export const generateID = customAlphabet(
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",
  12,
);
