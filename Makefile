.PHONY: protobuf

protobuf:
	buf generate "https://github.com/jasonblanchard/di-notebook-connect.git#branch=main,subdir=notebookapis"

build:
	ASSET_PREFIX=https://di-frontend-aad319a.s3.amazonaws.com npm run build

push: build
	aws s3 sync ./out s3://di-frontend-aad319a --acl public-read