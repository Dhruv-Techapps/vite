for lib in context ui; do 
  
  npx nx generate @nx/js:library \
    --directory=packages/$lib \
    --bundler=none \
    --importPath=@dhruv-techapps/$lib \
    --linter=eslint \
    --name=$lib \
    --unitTestRunner=vitest \
    --no-interactive
  
  npx cpy-cli "../auto-clicker-auto-fill/libs/$lib/src/**/*" "packages/$lib/src/" --overwrite
done
