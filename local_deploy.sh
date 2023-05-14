echo "Starting deploy frontend..."

echo "Switching to main branch"
git checkout main

echo “Building app...”
npm run build 

echo “Deploying files to server...”
scp -r dist/* /var/www/5.204.105.132/

echo “Done!”
