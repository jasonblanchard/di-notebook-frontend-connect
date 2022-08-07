.PHONY: protobuf

protobuf:
	buf generate "https://github.com/jasonblanchard/di-notebook-connect.git#branch=main,subdir=notebookapis"