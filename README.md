# nClouds - Sample App
![example workflow](https://github.com/nclouds/sample-app/actions/workflows/merge.yml/badge.svg)

This repository contains an example web application built using [NodeJs](https://nodejs.org/en/) and the [Express Framework](https://expressjs.com/). The purpose of this application is to provide working examples for CI/CD pipelines in multiple providers. This image is also publicly available in DockerHub at [ncloudspublic/sample-app](https://hub.docker.com/r/ncloudspublic/sample-app) so it can be used in sample deployments, you can find more configuration information below.

## Using the public container image
Feel free to use this image for any demo or example you want. The image is automatically built and pushed to Docker Hub and is available at `ncloudspublic/sample-app`. The image is always tagged with the first 8 characters of the commit id (i.e. 21de35f3).

```
docker pull ncloudspublic/sample-app:latest

or 

docker pull ncloudspublic/sample-app:21de35f3
```

The application supports the following configurations via environment variables:
| Variable       | Description                                  | Default                   |
|----------------|----------------------------------------------|---------------------------|
| PORT           | The port the applications listens on         | 3000                      |
| CUSTOM_MESSAGE | A message to display in the default web page | 'This is a sample app :)' |

## Example CI/CD  Pipelines
### Github Actions
- On Pull Requests to `main` -> [pull_request.yml](/.github/workflows/pull_request.yml)
- On Merge to `main` -> [merge.yml](/.github/workflows/merge.yml)
### CircleCi
- TBD
### Jenkins
- TBD