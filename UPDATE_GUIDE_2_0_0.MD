# Astro 2.0.0 Update Guide - Breaking Changes

If you want to upgrade Astro from version 1.6.0 or earlier to 2.0.0 or later, there will be several breaking changes in CSS. We are sorry about that - fixing names that used BEM incorrectly was a necessary evil tech debt that would only get worse over time. However, if you follow this guide to find and replace classes in your project, it shouldn't take too long. Shall we?

## 1. Replace all icon classes' double underscores with double dashes

**Example:** `a-icon__calendar` becomes `a-icon--calendar`

## 2. Rename these six icons to their new generic names

This is not a BEM fix, but some of our icon names were too specific of the Magnetis context for an open source project, so we decided to rename them.

**Replace list:**

*Before* | *After*
-|-
wallet | chart
referral | invite
trades | time
redemption | down
document | sheet
page | document

Rename all references to these icons. If it helps, search them with the class structure `a-icon__name` or `a-icon--name`. Also rename possible file path references. You don't need to rename your SVG files since the Astro import will do that for you.

## 3. Replace slider value classes' double dashes with double underscores

**Just do this:** `a-slider--value` becomes `a-slider__value`

## 4. Control input buttons logic has changed and will also require a JS update.

The inner `-` and `+` buttons no longer require combining all button classes. 
You also don't need to distinguish the two buttons by using "decrement" and "increment" classes anymore.

**Here's the difference in the markup classes:**

```diff
<div className="a-input a-input--control">
  <input/>
  <label/>
- <button class="a-btn a-btn--ghost-uranus a-btn--small a-btn--icon a-input--control__decrement">
+ <button class="a-input__btn-control">
    <i/>
  </button>
- <button class="a-btn a-btn--ghost-uranus a-btn--small a-btn--icon a-input--control__decrement">
+ <button class="a-input__btn-control">
    <i/>
  </button>
</div>
```

**And here's the difference in JS to select the buttons:**

```diff
const decrementButton = input.querySelector(
- '.a-input--control__decrement'
+ '.a-input__btn-control:nth-of-type(1)'
);
const incrementButton = input.querySelector(
- '.a-input--control__increment'
+ '.a-input__btn-control:nth-of-type(2)'
);	
```

## 5. Replace inputs' floating label class name

This class is usually applied in the elements through JS, so you should check your JS files for it.

**Just do this:** Replace `a-input--floating-label` with `a-input__label--floating`

## All done!

You're good to go. Please run a thorough QA to check for any remaining breakage and, if you enconter any problems, please open an issue in our repository and we will be happy to help.

Tip: Make sure to search classes without dots or quotes to get'em all.
