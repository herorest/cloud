(function(root, factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['./config'],factory);
    } else if (typeof exports === 'object') {
        module.exports = factory(require('./config'));
    } else {
        root.lanPack = factory(root.config);
    }
}(this, function(config) {
    var os = oversea;
    var lanPack = {
        year:config.year,
        lanArr:config.lanArr,
        language:'en_US',
        title:'Meizu cloud service',
        subtitle:'cloud service',
        desc:'Thank you for using Meizu account. Here you can enjoy the cloud services for your mobile phone, including app download, phone data sync, Phone Finder, and more, all of which let you manage your phone in a smarter way.',
        keyword:'Meizu  Cloud  Phone Finder',
        orient:'For a better experience, use the vertical screen',
        index:{
            head:[
                { k:'Flyme6',v:'http://www.flymeos.com/flyme6'},
                { k:'Download',v:'http://www.flymeos.com/firmware.html'},
                { k:'Cloud',v:'https://cloud.in.flyme.cn/'},
                { k:'Phone Finder',v:'https://finder.in.flyme.cn'},
                { k:'Community',v:'http://forum.flymeos.com/'},
                { k:'Meizu',v:'http://www.meizu.com/en/'},
            ],
            intro_1:'An efficient, secure, and handy cloud data manager for you',
            intro_2:'Log In',
            data_1:'Efficient Data Management',
            data_2:'Log in to '+ (os ? config.host[1] : config.host[0]) +' to manage your phone data from any PC. Edit notes online, modify contacts, recover deleted data...All can be done here easily.',
            data_3:'Efficient Cloud Services',
            safe_1:'Phone Anti-loss for Greater Security',
            safe_2:'By turning on Phone Finder, you can locate a lost phone, track the phone number, or enable Lost Mode to lock the device, take remote photos, and prevent phone flashing. Flyme takes all measures to help you find and protect your phone.',
            safe_3:'Secure Cloud Services',
            quick_1:'Convenient Data Migration',
            quick_2:'Flyme makes data migration easier than ever. To transfer personal data from your old phone to a new device, all you need to do is just log in to your Meizu account and tap a button. By logging out on the old phone, you can wipe out all your data from it, swiftly and completely.',
            quick_3:'Handy Cloud Services',
            how_1:'How do I use Cloud services?',
            how_2:'Log in to your Meizu account on your phone',
            how_3:'Find Data Sync in Settings > Meizu Account',
            how_4:'Toggle on Data Sync',
            how_5:'Toggle on log in to',
            begin_1:'Get started with Flyme cloud services now',
            begin_2:'Get started',
            begin_3:'with Flyme cloud services',
            begin_4:'Sign up',
            foot:[
                { k:'About Us',v:'http://www.meizu.com/en/about.html'},
                { k:'Contact Us',v:'http://www.meizu.com/en/contact.html'},
                { k:'Legal Statement',v:'http://www.meizu.com/en/legal.html'}
            ]
        },
        customer:'Customer Service'
    };
    return lanPack;
}));
