build/degrade.js: 
	mkdir -p build
	./node_modules/.bin/browserify degrade.js > $@

clean: 
	rm -rf build

.PHONY: clean