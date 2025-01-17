#!/usr/bin/env bash
set -e

echo "Running tests..."
npm run test

echo "Tests passed! Proceeding to build..."
npm run build

echo "Build complete."
