#!/usr/bin/env bash

set -e

echo "======================================"
echo " First Setup"
echo "======================================"

echo ""
echo "Running verification..."
./scripts/verify-repo.sh
make verify

echo ""
echo "Git status:"
git status

echo ""
echo "Next steps:"
echo "1. Fill out docs/STARTUP_INTAKE_TEMPLATE.md"
echo "2. Update README.md"
echo "3. Update PRODUCT.md"
echo "4. Update ARCHITECTURE.md"
echo "5. Run: git add ."
echo "6. Run: git commit -m \"Initial starter setup\""
