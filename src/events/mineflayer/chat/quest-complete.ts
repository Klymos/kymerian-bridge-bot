import Emojis from '../../../util/emojis';

export default {
    name: 'chat:questComplete',
    runOnce: false,
    run: async (bot) => {
        await bot.sendToDiscord(
            'gc',
            `${Emojis.positiveGuildEvent} The guild has completed this week's Guild Quest!`,
            0xffaa00,
            true
        );
    },
} as Event;
