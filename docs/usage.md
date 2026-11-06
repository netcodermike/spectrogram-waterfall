# Using Spectrogram Waterfall

## Quick start

Start the application using the README commands. Adjust the labelled controls, run the primary action, and inspect the result in the workspace. Local exports are downloaded only when you select an export action.

## Supported workflow

1. Microphone or local audio input.
2. Four FFT resolutions and range selection.
3. Scrolling live frequency heatmap.

## Validation and troubleshooting

Run the commands in the README. Invalid inputs produce explicit errors rather than silently changing the requested operation. Browser audio requires a user gesture; microphone apps require HTTPS or localhost and permission. For file tools, supply supported input formats and writable output directories.

## Limitations

Microphone requires HTTPS/localhost and permission. This is a relative magnitude display, not a calibrated measurement instrument.

Tests use synthetic fixtures. These tests do not certify hardware compatibility, real-world forecast quality, trained-model accuracy, or production suitability for every input.
