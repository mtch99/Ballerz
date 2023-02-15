import { IBadge } from "./../types";



const NewBieBadge: IBadge = {
    name: "NewBie",
    symbol: '🆕',
    description: "Vous devez jouer plus de 3 fois pour obtenir ce badge"
}

const GMBadge: IBadge = {
    name: "General Manager",
    symbol: '👔',
    description: "Vous devez être le créateur d'un groupe qui compte plus de 15 joueurs"
}

export const fivePlayerGameBadges: IBadge[] = [
    NewBieBadge,
    GMBadge
]