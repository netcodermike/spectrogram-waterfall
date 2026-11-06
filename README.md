# Spectrogram Waterfall

Inspect microphone or local audio as a scrolling frequency heatmap with adjustable range.

**Language:** JavaScript · **License:** MIT · **Data:** Local by default

## What it does

- Microphone or local audio input
- Four FFT resolutions and range selection
- Scrolling live frequency heatmap

## Requirements

Node.js 22+ for tests; Python 3 for the optional local HTTP server.

## Install, validate, and run

```sh
npm install --ignore-scripts
npm test
npm start
```

Open http://127.0.0.1:8080 in a modern browser. TypeScript source compiles to `dist/` when running `npm test` or `npm run build`. Start audio with an explicit button click.

## Usage and examples

See [docs/usage.md](docs/usage.md) for a walkthrough and [docs/architecture.md](docs/architecture.md) for implementation details. Tests are deterministic and do not require an exchange, paid API, external model, microphone, or private data.

## Boundaries

Microphone requires HTTPS/localhost and permission. This is a relative magnitude display, not a calibrated measurement instrument.

## Privacy

No analytics or accounts are built in. Local file tools process only the paths you supply. For model-server and weather apps, the interface and usage guide identify the destination and the data sent. Do not commit personal input files, model credentials, or generated recordings.

## Development

Run the validation commands above before submitting changes. GitHub Actions runs these checks on pushes and pull requests. See the workflow for the reproducible toolchain. A successful workflow verifies the tested paths; manual audio-device behavior is documented separately.
