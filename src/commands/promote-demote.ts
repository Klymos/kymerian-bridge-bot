import { ApplicationCommandOptionType, EmbedBuilder } from 'discord.js';
import capitaliseString from '../util/capitalise-string';

export default {
    data: {
        name: 'promotedemote',
        description: 'Promote or demote a user in the guild!',
        options: [
            {
                name: 'type',
                description: 'Would you like to promote or demote the user?',
                type: ApplicationCommandOptionType.String,
                choices: [
                    {
                        name: 'promote',
                        value: 'promote',
                    },
                    {
                        name: 'demote',
                        value: 'demote',
                    },
                ],
                required: true,
            },
            {
                name: 'user',
                description: 'What is the name of the user you want to promote/demote?',
                type: ApplicationCommandOptionType.String,
                required: true,
            },
        ],
    },
    run: async (bot, interaction, args) => {
        const type = args[0] as 'promote' | 'demote';
        const user = args[1] as string;

        const embed = new EmbedBuilder();
        try {
            await bot.executeTask(`/g ${type} ${user}`);
            embed
                .setColor(type === 'promote' ? 'Green' : 'Red')
                .setTitle(capitaliseString(`${type}d!`))
                .setDescription(`${user} has been ${type}d!`);
        } catch (e) {
            embed
                .setColor('Red')
                .setTitle('Error')
                .setDescription(e as string);
        }

        await interaction.reply({
            embeds: [embed],
        });
    },
    staffOnly: true,
} as Command;
