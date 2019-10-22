FROM python:3.6

RUN pip3 install mkdocs
RUN pip3 install mkdocs-material

COPY ./ docs/
WORKDIR ./docs/Rico

EXPOSE 8000

CMD ["mkdocs", "serve"]

