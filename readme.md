# Nerdvana Website
Hello, if you are reading this, it's probably about 2032, the committe had forgotten that Nerdvana had a website and now you've found out that yes, yes it does. 

## How to make edits

Unless you want to make changes to the design of the website, the easiest way to make edits is to use the github.dev interface itself. Simply press `.` on your keyboard and it will open right up. At this point, you should follow the changes below to make your edits and come back here when you're done to read about how to publish your changes.

Once you're ready to publish your changes, you need to do a few things.

1) Press `ctrl + s` to save your changes. (cmd + s on mac, but you probably already knew that if you're on a mac).
2) Press `ctrl + shift + g` and type a message describe what you changed. If you only changed the content of the website for example, you could say "updated staff members". Rememver, keep it simple.
3) Press `ctrl + enter` to commit your changes. This will save your changes to the website, but it won't be live yet.
4) Wait a few minutes and then refresh the website. Your changes should now be live!

> NOTE: It may ask you to sign in to github, you MUST sign in to github to make changes to the website. If you don't have a github account, you can create one for free. If you are a member of the nerdvana committee, please ask the current manager for the github repo for access, this is usually the president of the IT society.

## What to edit
This website is designed so that all you have to do is edit 1 file (or maybe 2) and press save and for the most part, everything else will be taken care of. Here's what you need to know:

- If you have an increase or decrase in the number of staff, you'll need to edit index.css and change the variable marked number of staff. This keeps all the staff members on one line, if there are too many, it will wrap to the next line. Feel free to play around with what you think looks nice.
- If you want to change the staff members photos, simply drag and drop the new photos into the images/staff folder and make sure they are named the same as the name you want to appear on the website. If their name has a space in it, replace the space with an underscore. Capitilisation is important, so make sure that matches.
- To add or remove a society, repeat the steps above, but instead of using the staff folder use the societies folder. The same rules apply. You must also edit the json file to add or remove the new society. It's fairly self explanatory, just follow the format of the existing societies.