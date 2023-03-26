#!/bin/sh

# Set the name of the directory you want to create
BACKUP_DIR="../Ballerz-001-Tests-Backup"

# Check if backup exists
if [ -d "$BACKUP_DIR" ]; then
    # Delete the current backup
    echo "Directory $BACKUP_DIR already exists. Performing deletion"
    rm -r "$BACKUP_DIR"
fi

# init empty backup dir
mkdir "$BACKUP_DIR"
# Copy all files from the project directory to the backup directory
cp -r . "$BACKUP_DIR"
echo "Directory $BACKUP_DIR initialized successfully."


