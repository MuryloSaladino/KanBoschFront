import Text from "@/components/Text"
import styles from "./styles.module.css"
import { ICardList } from "@/interfaces/cards.interfaces"
import Card from "./Card"

interface ICardListProps {
    cardList: ICardList
}

export default function CardList({ cardList }: ICardListProps) {
    return (
        <li className={styles.container}>
            <Text fontSize="lg" fontWeight="semibold" color={cardList.color}>{ cardList.name }</Text>

            {cardList.cards.map(card => (
                <Card
                    key={card.id}
                    card={card}
                />
            ))}
        </li>
    )
}

