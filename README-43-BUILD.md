# ELÖRE Experience Page UX Redirection 43 Build

This build takes the Experience page in a different direction while respecting the removal notes.

## Files Included

- app/experiences/page.tsx
- components/experiences/experience-video-frame.tsx
- public/videos/experiences/.gitkeep

## What Changed

- Keeps the three workshop cards removed.
- Keeps the Experience Snapshot removed.
- Keeps the pricing box removed.
- Keeps small titles removed.
- Keeps the top Book an Experience CTA.
- Keeps only the approved content:
  - main headline
  - intro paragraph
  - hero image and hero statement
  - experience statement
  - What Is Included list
  - vertical video
  - materials image
  - booking form
- Does not put the video and image side by side.
- Rebuilds the content into a cleaner UX flow:
  1. CTA + headline + intro
  2. large hero image
  3. experience statement + included details
  4. video as its own intentional editorial feature
  5. materials image as a separate wide visual
  6. booking form
- Uses a fallback image for the video so the video area does not show as a black box before the MP4 is uploaded.

## Video Upload

Download the selected vertical workshop video, rename it:

atelier-workshop.mp4

Upload it here:

public/videos/experiences/atelier-workshop.mp4

## Upload Instructions

1. Unzip this folder.
2. Open GitHub.
3. Make sure you are on the restore-july-1 branch.
4. Upload the contents of this folder.
5. Commit with: 43 Build UX redirect experience page
