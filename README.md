# Instructions to build an image
# H2 to create an image#
docker build . -t IMG_NAME
# H2 Run the image#
docker run -it -p 3000:3000 IMG_NAME npm start 
