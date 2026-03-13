#!/usr/bin/env bash

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

check_file() {
  local path="$1"
  if [ ! -f "$REPO_ROOT/$path" ]; then
    echo "ERROR: Required file missing: $path"
    exit 1
  fi
}

check_dir() {
  local path="$1"
  if [ ! -d "$REPO_ROOT/$path" ]; then
    echo "ERROR: Required directory missing: $path"
    exit 1
  fi
}

check_file "README.md"
check_file "AI_RULES.md"
check_file "ARCHITECTURE.md"
check_dir ".github/ISSUE_TEMPLATE"
check_file ".github/workflows/ci.yml"

echo "SUCCESS: All required repo files and folders are present."
