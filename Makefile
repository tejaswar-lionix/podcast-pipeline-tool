build:
	docker build -t podcast-pipeline .

test:
	pytest -q

run:
	python manage.py runserver 0.0.0.0:8000
