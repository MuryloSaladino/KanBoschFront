import Text from "@/components/Text"
import styles from "./styles.module.css"
import { ICardList } from "@/interfaces/cards.interfaces"
import Link from "@/components/Link";

interface ICardListProps {
    cardList: ICardList
}

export default function CardList({ cardList }: ICardListProps) {
    return (
        <li className={styles.container}>
            <Text fontSize="lg" fontWeight="semibold" color={cardList.color}>{ cardList.name }</Text>

            {cardList.cards.map(card => (
                <Link type="box" to={`c/${card.id}`}>
                    <div className={styles.card} key={card.id}>
                        <Text>{card.description}</Text>
                    </div>
                </Link>
            ))}
        </li>
    )
}