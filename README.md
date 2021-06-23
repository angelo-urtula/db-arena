# db-arena

This application is currently a two-player local versus game in which two players are pitted against each other to see who will be able to post to the database! Players
both control a larger circle representing themselves as well as a smaller circle that represents their DEATH circles! The objective for each player is to have their 
death circle make contact with the enemy's body while keeping their own body away from the enemy's death circle. Whoever manages to have their death circle touch the 
enemy's body first wins and will gain the chance to post a kill message to the database. The winner also gains a soul, while the loser loses a soul. If a player happens
to reach 0 souls in the database, they are deleted from the database along with all of their messages!

You can create a "gladiator", giving it a name, motto, idea of honor, and reason for fighting. Each gladiator initially starts with 3 souls so they have a chance at 
making it big in the database while having some leeway to learn the ropes. After both players select their respective gladiators, they can refer to the instructions
screen for their respective controls. Once they click "Start Fight!", it's on until someone dies!

After git cloning this repo, change directories in your terminal to the backend folder. Run "rails db:migrate" and "rails db:seed" to get the database up and populated.
Run "rails s" in order to start up the server. Then start the HTML file with your HTML viewing extension.
