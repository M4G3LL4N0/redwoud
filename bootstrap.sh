#!/usr/bin/env bash

set -e

echo "======================================"
echo " AI Dev Workflow Starter Bootstrap"
echo "======================================"

mkdir -p docs
mkdir -p prompts
mkdir -p scripts
mkdir -p .github/ISSUE_TEMPLATE
mkdir -p .github/workflows
mkdir -p .continue/checks

if [ -f "./scripts/verify-repo.sh" ]; then
  echo ""
  echo "Running repo verification..."
  ./scripts/verify-repo.sh
else
  echo ""
  echo "WARNING: scripts/verify-repo.sh not found."
fi

echo ""
echo "Bootstrap complete."
echo ""
echo "Next steps:"
echo "1. Open this folder in Cursor"
echo "2. Ask AI to inspect the repository"
echo "3. Use prompts from the prompts/ folder"
echo "4. Commit and push changes"
