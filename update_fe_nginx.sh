echo "Starting deploy frontend..."

echo "Switching to main branch"
git checkout main

echo “Building app...”
npm run build 

# this was the local settings
#echo “Deploying files to server...”
#scp -r dist/* /var/www/5.204.105.132/

echo “Deploying files to server…”
scp -r dist/* raccoon@87.229.84.84:/var/www/87.229.84.84/

echo “Done!”
