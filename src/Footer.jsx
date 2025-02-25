// const Footer = () => {
//     return (
//         <footer>
//             <h5>1. 830 - 들어맞는 숫자가 아예 없으므로 아웃. 이때부터 0, 3, 8이 후보에서 빠지므로 남는 숫자는 1, 2, 4, 5, 6, 7, 9다.</h5>
//             <h5>2. 659 - 6이 있지만 위치가 다르므로 1볼. 게임 상으로는 어떤 숫자가 맞는지 모르기 때문에 가장 난감하다.</h5>
//             <h5>3. 264 - 2가 있고 위치가 맞으며, 6이 있지만 위치가 다르므로 1스트라이크 1볼.</h5>
//             <h5>4. 126 - 숫자는 전부 맞지만 위치는 6만 맞고 나머지 둘은 다르므로 1스트라이크 2볼.</h5>
//             <h5>5. 216 - 전부 맞으므로 승리.</h5>
//         </footer>
//     );
// };

// PDF 2.72
const Footer = (props) => {
    return (
        <footer>
            {
                props.list.map((v, i) => {
                    return <h5 key={i} onClick={(e) => {
                        // PDF 2.90
                        e.target.style.backgroundColor = 'beige';
                        e.target.style.textDecoration = 'underline';
                        e.target.classList.add("clicked"); // click 하면 class="clicked" 생성됨
                    }}>
                        {v}
                    </h5>
                })
            }
        </footer>
    );
};
export default Footer;