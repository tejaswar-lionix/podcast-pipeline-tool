# Podcast/Video Production Pipeline Automation Tool

Takes raw recordings and automates post-production: transcription, filler-word removal, multi-track leveling, chapter generation, clip extraction for social, show-notes drafting — as editable pipeline, not black box.

## Architecture
- **Backend:** Django 4.2 + DRF + Celery + Redis, PostgreSQL (sqlite fallback), FFmpeg (mock)
- **Frontend:** React 18 + Vite + Waveform (mock) + Pipeline Editor (React Flow mock)
- **15 Apps:** ingestion, transcription, filler_removal, leveling, chapters, clips, show_notes, pipeline, media, storage, collaboration, publishing, analytics, api, frontend

## Install
```bash
python -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
npm install
```

## Build
```bash
make build
docker build -t podcast-pipeline .
npm run build
```

## Run
```bash
python manage.py migrate --run-syncdb
python manage.py runserver 0.0.0.0:8000
celery -A podcast worker -l info
npm run dev
docker-compose up
```

## Tests
```bash
pytest -q
pytest --cov=apps --cov-report=xml
npm test
```

## Features
- **Transcription:** Whisper ASR with diarization and timestamps `00:01:23.450`
- **Filler removal:** detects `um`, `uh`, `silence >0.5s`, `false starts` with confidence
- **Leveling:** loudness `-16 LUFS`, normalization, compression `2:1`, multi-track
- **Chapters:** topic segmentation, titles, timestamps
- **Clips:** extraction for social `9:16` with virality scoring
- **Show notes:** drafting with timestamps and links
- **Pipeline:** editable DAG `ingest→transcribe→filler→level→chapters→clips→notes`, not black box

## License
Proprietary — All rights reserved.
