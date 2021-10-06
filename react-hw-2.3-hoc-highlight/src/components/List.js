/* eslint-disable array-callback-return */
/* eslint-disable default-case */
/* eslint-disable react/jsx-no-undef */
import Article from "./Article";
import Video from "./Video";

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <Video {...item} />
                );

            case 'article':
                return (
                    <Article {...item} />
                );
        }
    });
};