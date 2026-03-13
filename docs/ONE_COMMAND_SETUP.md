# One Command Setup

This repository can create a brand new starter project.

## Command

Run this from inside `ai-dev-workflow-starter`:

./init-new-project.sh project-name

## Example

./init-new-project.sh my-new-startup

## What it does

- creates a new folder in `~/Projects/`
- copies the starter files
- copies scripts, docs, prompts, GitHub files, and Continue files
- initializes a new git repository
- sets the branch to `main`

## After creation

Go into the new project:

cd ~/Projects/my-new-startup

Run verification:

./scripts/verify-repo.sh
make verify

Then save it:

git add .
git commit -m "Initial starter setup"
