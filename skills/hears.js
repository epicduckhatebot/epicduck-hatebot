// Botkit is powered by "skills". For example this one is "hears"
// Basically the bot listens to to direct mentions and mentions (of the bot)
// and if it hears the word "!thanks" then the skill is triggered
// try changing the trigger word 
// here are the docs for more info https://botkit.ai/docs/v0/core.html
// and the Botkit Discord code which has some great examples! 
// https://github.com/brh55/botkit-discord

module.exports = function(controller) {
  controller.hears("!hate", ["direct_mention", "mention"], (bot, message) => {
    let response;
    let sender = message.user;
    
    // Many bots use the this method but sometimes it doesn't work, for example if you mention more than one person
    //let recipient = message.mentions.users.last();
    
    
    // this method filters out any users that aren't bots
    // if you have a bot that does more administrative things like blocking people, you might want to filter even more
    // like filter out admins or the person sending the message
    // it's using Discord.js for all this, yep that's right you have access to everything in Botkit AND Discord.js
    // https://discord.js.org/#/docs/main/master/class/User
    let recipient = message.mentions.users.filter(user => user.bot === false).last();

    
    // this is a list of potential responses, it chooses from them randomly.
    // Try changing them or adding your own. 
    let responses = [
      `${recipient} got hate from ${sender} 🎉`,
      `${recipient} , ${sender} Hates You`,
      `${recipient} You have been rejected by all of your crushes because of ${sender} 🎉`,
      `Hey ${sender} says ${recipient} You Trash 😍`,
      `Hey ${sender}! says ${recipient} You Week💪`,
      `Hey ${sender}! says ${recipient} Go To School💪`,
      `Hey ${sender}! says ${recipient} Get A Job💪`,
      `Hey ${sender} says ${recipient} You Great, not😍`,
      `Hey ${sender} says ${recipient} Get some help 😍`,
      `Hey ${sender} says ${recipient} no one likes you 😍`,
      `Hey ${sender} says ${recipient} if I had a face like your id sue your parents 👨`,
      `Hey ${sender} says ${recipient} You are more disappointing than an unsalted pretzel 🥨`,
      `Hey ${sender} says ${recipient} Your kid is so annoying, he makes his Happy Meal cry ☹️`,
      `Hey ${sender} says ${recipient} You have so many gaps in your teeth it looks like your tongue is in jail 😍`,                                              
      `Hey ${sender} says ${recipient} Your face makes onions cry ☹️`,
      `Hey ${recipient} ${sender} says, I’m not insulting you, I’m describing you 😍`,
      `Hey ${sender} says ${recipient}  Keep rolling your eyes, you might eventually find a brain 🧠`,
      `Hey ${sender} says ${recipient} You bring everyone so much joy, when you leave the room 😍`,
      `Hey ${sender} says ${recipient} I thought of you today. It reminded me to take out the trash 🗑️`,
      `Hey ${sender} says ${recipient} If you’re going to be two-faced, at least make one of them pretty 😍`,
      `Hey ${sender} says ${recipient} My phone battery lasts longer than your relationships 😍`,
      `Hey ${sender} says ${recipient} Id Slap you but that whold be animal abuse 🦙`,
      `Hey ${sender} says ${recipient} Do yourself a favor and ignore anyone who tells you to be yourself. Bad idea in your case 😍`,
      `Hey ${sender} says ${recipient} I don’t know what your problem is, but I’m guessing it’s hard to pronounce 😍`,
      `Hey ${sender} says ${recipient} Were you born on the highway? That is where most accidents happen 😍`,
      `Hey ${sender} says ${recipient} There are some remarkably dumb people in this world. Thanks for helping me understand that 😍`,
      `Hey ${sender} says ${recipient} I’d give you a nasty look but you’ve already got one 😍`,
      `Hey ${sender} says ${recipient} It looks like your face caught fire and someone tried to put it out with a hammer🔥🔨`,
      `Hey ${sender} says ${recipient} Your only purpose in life is as an organ donor 🫀`
    ]
    response = responses[Math.floor(Math.random() * responses.length)];
    
    bot.reply(message, response);
  });
};
