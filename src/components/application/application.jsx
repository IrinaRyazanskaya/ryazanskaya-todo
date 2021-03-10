import { Component } from 'react';
import { InputItem } from '../input-item/input-item';
import { ItemList } from '../item-list/item-list';
import { Divider } from '../divider/divider';
import { Footer } from '../footer/footer';
import styles from './application.module.css';
import '../../assets/fonts.css';

class Application extends Component {
    state = {
        items: [
            {
                value: 'Сделать уборку',
                isDone: true,
                optionId: 'thing-1'
            },
            {
                value: 'Сходить в магазин',
                isDone: false,
                optionId: 'thing-2'
            },
            {
                value: 'Приготовить ужин',
                isDone: false,
                optionId: 'thing-3'
            }
        ]
    };

    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = { ...item };

            if (item.optionId === id) {
                newItem.isDone = !item.isDone;
            }

            return newItem;
        });

        this.setState({ items: newItemList });
    };

    render() {
        return (
            <div className={styles.screen}>
                <div className={styles.wrap}>
                    <h1 className={styles.title}>todo list</h1>
                    <div className={styles.todo}>
                        <InputItem />
                        <ItemList items={this.state.items} onClickDone={this.onClickDone} />
                    </div>
                    <Divider />
                    <Footer count={3} />
                </div>
            </div>
        );
    }
};

export { Application };