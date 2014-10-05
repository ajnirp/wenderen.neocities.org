colors = {
    normal: '\x1B[0m',
    bred: '\x1B[1;31m', // bright red
    bgreen: '\x1B[1;32m', // bright green, #44D544
    byellow: '\x1B[1;33m', // bright yellow, #FF5
    bwhite: '\x1B[1;37m', // bright white, #FFF
};

strings = {
    bullet: colors.bgreen + '* ' + colors.normal
};

function show_about() {
    return "Hi, I'm " + colors.bgreen + "Rohan Prinja" + colors.normal + ". Nice to meet you, and welcome to my website!\nI'm a final year undergraduate student of Computer Science and Engineering at IIT Bombay. Now that you're here, why don't you take some time to explore this site? Type " + colors.byellow + "help" + colors.normal + " to see what commands you can run!";
}

function show_interests() {
    prog = 'I love coding and spend a lot of time experimenting with code, thinking up ideas and implementing them. I started programming when I was 17 and immediately regretted not having started younger!';
    books = 'I also enjoy reading books, in particular science fiction novels and dystopias';
    music = 'I listen to a lot of music (about three hours a day, give or take). My favorite artists usually fall into the instrumental/heavy rock/hardcore/jazz categories, but I\'m always open to all genres and styles';
    return strings.bullet + [prog, books, music].join('\n' + strings.bullet);
}

function show_resume() {
    return 'You can find a ' + colors.bgreen + 'pdf copy of my two-page resum\u00e9' + colors.normal + ' at\nhttp://wenderen.neocities.org/resume.pdf\nYou can find a ' + colors.bgreen + 'longer, more detailed (and better looking!) version' + colors.normal + ' of my resum\u00e9 at\nhttp://wenderen.neocities.org/cv.pdf\nPlease note that my CV is more up-to-date than my resum\u00e9 - this means that the GPA and some other items in the resum\u00e9 will differ from those in the CV';
}

function show_work() {
    chronus = 'In the ' + colors.bwhite + 'summer after my second year' + colors.normal + ', I interned at ' + colors.byellow + 'Chronus Software' + colors.normal + ', a mature mentoring solutions startup based in Chennai. It was there that I fell in love with the World Wide Web as I learned the ins and outs of web development. It was interesting to experience the culture and energy of a mature startup, and I had a great time there.';
    samsung = 'In the ' + colors.bwhite + 'summer after my third year' + colors.normal + ', I interned at ' + colors.byellow + 'Samsung Electronics HQ' + colors.normal + ', in Suwon, South Korea. This was both the first time that I had been abroad, as well as my first time working in a huge, global corporation. It was a interesting contrast to my Chronus intern, and here, too, I picked up a lot of skills. Korea itself is a beautiful country and there is no dearth of places to visit. But the best parts of my intern were the friends I made - new friends from IITB, IITD and IITM, as well my coworkers, who turned out to be some of the kindest and friendliest people I\'ve known!';
    return strings.bullet + [chronus, samsung].join('\n' + strings.bullet);
}

function show_research() {
    return 'TODO!!!';
}

function show_contact() {
    github  = colors.byellow + 'github      ' + colors.normal + 'https://github.com/wenderen';
    lastfm  = colors.byellow + 'last.fm     ' + colors.normal + 'https://last.fm/wenderen';
    email   = colors.byellow + 'email       ' + colors.bgreen + '(\'Rohan Prinja\' in lower case without spaces) ' + colors.normal + '(at)' + colors.bgreen + ' gmail ' + colors.normal + '(dot)' + colors.bgreen + ' com';
    return strings.bullet + [github, lastfm, email].join('\n' + strings.bullet);
}

function show_help(item) {
    switch(item) {
    case "help":
        return colors.byellow + 'help <command>' + colors.normal + ' tells you how to use a command';
        break;
    case 'about':
        return colors.byellow + 'about' + colors.normal + ' tells you more about me!';
        break;
    case 'interests':
        return colors.byellow + 'interests' + colors.normal + ' tells you about my interests';
        break;
    case 'resume':
        return colors.byellow + 'resume' + colors.normal + ' gives you a link to a pdf copy of my resume';
        break;
    case 'work':
        return colors.byellow + 'work' + colors.normal + ' tells you about my work experience';
        break;
    case 'research':
        return colors.byellow + 'research' + colors.normal + ' tells you about my research interests and experience';
        break;
    case 'contact':
        return colors.byellow + 'contact' + colors.normal + ' tells you how to get in touch with me';
        break;
    case 'clear':
        return colors.byellow + 'clear' + colors.normal + ' clears the terminal screen';
        break;
    default:
        return unrecognized(item);
    }
}

function unrecognized(command) { return '\x1B[1;31mUnrecognized command:\x1B[0m ' + command; }

function run(command, term) {
    switch(command) {
    case "pwd":
        return document.URL;
        break;
    case "ls":
        return colors.bred + 'Nothing to see here :)' + colors.normal;
        break;
    case "cd":
        return colors.bred + 'There\'s no filesystem here :P' + colors.normal;
        break;
    // case "exit":
    // case "quit":
    //     term.echo(colors.bgreen + 'Are you sure you want to leave? ' + colors.bred + '(y/N)' + colors.normal);
    //     term.push(function(command, term) {
    //      command = command.toLowerCase();
    //      if (command === 'y' || command === 'yes') {
    //          open(location, '_self').close();
    //      } else {
    //          term.pop();
    //      }
    //     }, {
    //      prompt: ' ',
    //      name: ' '
    //     });
    //  return;
    //  break;
    // website sections!
    case "about":
        return show_about();
        break;
    case "interests":
        return show_interests();
        break;
    case "resume":
        return show_resume();
        break;
    case "work":
        return show_work();
        break;
    case "research":
        return show_research();
        break;
    case "contact":
        return show_contact();
        break;
    }

    if (command.substring(0,4) === 'sudo') {
        return colors.bred + 'Nice try' + colors.normal;
    }

    if (command.substring(0,4) === 'help') {
        if (command === 'help') {
            return colors.bgreen + 'Available commands:' + colors.normal + ' about\n' +
                   '                    interests\n' +
                   '                    resume\n' +
                   '                    work\n' +
                   '                    help\n' +
                   '                    clear\n' +
                   '                    contact\n' +
                   'To learn more about a command, type ' + colors.byellow + 'help <command>' + colors.normal;
        }
        else {
            var split = command.split(' ');
            if (split.length > 2) {
                return unrecognized(command);
            }
            return show_help(split[1]);
        }
    }

    return unrecognized(command);
}

jQuery(function($, undefined) {
    $('#terminal').terminal(function(command, term) {
        /* super ugly, super hacky code */
        previousPromptCmds = document.getElementsByClassName('terminal-output');
        var length = previousPromptCmds.length;
        // 25 is to upper bound the number of 'cleans' we make
        for (var i = 0 ; i < Math.min(25, length) ; i++) {
            var promptCmd = previousPromptCmds[length - i - 1].lastChild.firstChild;
            // the !== 'span' is to prevent 'cleaning' a clean previous prompt
            if (promptCmd && promptCmd.firstChild.nodeName !== 'span') {
                console.log(promptCmd);
                /* mimic the prompt */
                var promptSpan = document.createElement('span');
                promptSpan.innerHTML = 'rohan $';
                promptSpan.style.color = '#FFA412';
                /* filter out the command */
                promptCmd.innerHTML = ' ' + promptCmd.innerHTML.substring(18);
                /* throw in the new prompt */
                promptCmd.insertBefore(promptSpan, promptCmd.firstChild);
            }
        }
        command = command.trim();
        if (command !== '') {
            try {
                var result = run(command.trim(), term);
                if (result !== undefined) {
                    term.echo(new String(result));
                }
            } catch(e) {
                term.error(new String(e));
            }
        } else {
            console.log(term.history.data);
        }
    }, {
        greetings: '',
        name: 'my_website',
        height: 500,
        width: 750,
        prompt: 'rohan $ '
    });
});