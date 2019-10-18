# Astro 3.0.0 Update Guide - Breaking Changes

If you want to upgrade Astro from version 2.0.1 or earlier to 3.0.0 or later, there will be a small breaking change in CSS. If you follow this guide to find and replace classes in your project, it shouldn't take too long. Shall we?

## 1. Replace all "text small" paragraph classes with "very small"

That's because the font-size in text classes with `-small` was previously **12px**, but now that same class is a new intermediate **14px** size. 
The new class name for the 12px size is now `-very-small`.

Please note that **this does NOT affect TITLE classes!**

**Do only this:** 

1.1. `a-text--small` becomes `a-text--very-small`

1.2. `a-text--secondary-small` becomes `a-text--secondary-very-small`

## 2. Find any Astro fonts with a custom size of `14px` and apply the new `text-small` classes to them.

Before this update, if we ever got a spec with a `14px` font size, we had to manually force that size because it was not supported. Now it is, for both Poppins and Lato! 

We may now apply `a-text--small` and `a-text--secondary-small` to get a `14px` font size.

## All done!

You're good to go. Please run a thorough QA to check for any remaining breakage and, if you enconter any problems, please open an issue in our repository and we will be happy to help.

Tip: Make sure to search classes without dots or quotes to get'em all.
