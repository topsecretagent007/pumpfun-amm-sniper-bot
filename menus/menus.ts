const title = `
██████╗ ██╗   ██╗███╗   ███╗██████╗ ███████╗██╗   ██╗███╗   ██╗    ███████╗███╗   ██╗██╗██████╗ ███████╗██████╗ 
██╔══██╗██║   ██║████╗ ████║██╔══██╗██╔════╝██║   ██║████╗  ██║    ██╔════╝████╗  ██║██║██╔══██╗██╔════╝██╔══██╗
██████╔╝██║   ██║██╔████╔██║██████╔╝█████╗  ██║   ██║██╔██╗ ██║    ███████╗██╔██╗ ██║██║██████╔╝█████╗  ██████╔╝
██╔═══╝ ██║   ██║██║╚██╔╝██║██╔═══╝ ██╔══╝  ██║   ██║██║╚██╗██║    ╚════██║██║╚██╗██║██║██╔═══╝ ██╔══╝  ██╔══██╗
██║     ╚██████╔╝██║ ╚═╝ ██║██║     ██║     ╚██████╔╝██║ ╚████║    ███████║██║ ╚████║██║██║     ███████╗██║  ██║
╚═╝      ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝      ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝╚═╝  ╚═══╝╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝
                                                                                                                
                                             █████╗ ███╗   ███╗███╗   ███╗                            
                                            ██╔══██╗████╗ ████║████╗ ████║                            
                                            ███████║██╔████╔██║██╔████╔██║                            
                                            ██╔══██║██║╚██╔╝██║██║╚██╔╝██║                            
                                            ██║  ██║██║ ╚═╝ ██║██║ ╚═╝ ██║                            
                                            ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚═╝    
`

export const title_display = () => {
    console.log(title);
}

export const settings_title_display = () => {
    console.log(settings_title);
}

export const sniper_title_display = () => {
    console.log(sniper_title);
}

export const constants_setting_title_display = () => {
    console.log(constants_setting_title);
}

export const automatic_sniper_title_display = () => {
    console.log(automatic_sniper_title);
}

export const manual_sniper_title_display = () => {
    console.log(manual_sniper_title);
}

export const screen_clear = () => {
    console.clear();
}

export const main_menu_display = () => {
    console.log('\t[1] - Sniper Mode');
    console.log('\t[2] - Settings');
    console.log('\t[3] - Exit');
}

export const constants_setting_display = () => {
    console.log('\t[1] - Sol Amount To Buy');
    console.log('\t[2] - Transaction Number');
    console.log('\t[3] - Profit % to sell');
    console.log('\t[4] - Stop Loss % to sell');
    console.log('\t[5] - Transaction Delay Time');
    console.log('\t[6] - Fee Per Transaction');
    console.log('\t[7] - Compute Unit');
    console.log('\t[8] - Show Current Settings');
    console.log('\t[9] - Back');
}

export const settings_menu_display = () => {
    console.log('\t[1] - Change RPC');
    console.log('\t[2] - Change Webhook');
    console.log('\t[3] - Change Slippage');
    console.log('\t[4] - Change Wallet');
    console.log('\t[5] - Show Current Settings');
    console.log('\t[6] - Back');
}

export const sniper_menu_display = () => {
    console.log('\t[1] - Run Sniper');
    console.log('\t[2] - Constants Setting');
    console.log('\t[3] - Help');
    console.log('\t[4] - Back');
}

export const sniper_help_display = () => {
    console.log('\tDisclaimer: \t- the tool will start sniping if all inputs are valid!');
    console.log('\t            \t- double check the amount and pool details in the monitor');
    console.log('\t            \t  to avoid miss-inputs and big price impact');
}