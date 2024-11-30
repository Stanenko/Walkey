import React from 'react';
import Svg, { Path } from "react-native-svg";

const CopyIcon = ({ width, height, style }: { width: number, height: number, style?: object }) => (
<Svg width="16" height="16" viewBox="0 0 8 8" fill="none">
<Path d="M6.10914 2.42859H3.42781C3.34324 2.42881 3.25954 2.4457 3.18151 2.47829C3.10347 2.51089 3.03263 2.55855 2.97303 2.61855C2.91344 2.67855 2.86625 2.74971 2.83418 2.82796C2.80211 2.90621 2.78579 2.99002 2.78614 3.07459V6.43726C2.78614 6.79392 3.07347 7.08326 3.42781 7.08326H6.10914C6.19371 7.08304 6.2774 7.06615 6.35544 7.03355C6.43347 7.00096 6.50431 6.9533 6.56391 6.8933C6.62351 6.8333 6.67069 6.76214 6.70276 6.68388C6.73483 6.60563 6.75116 6.52182 6.75081 6.43726V3.07459C6.75081 2.71792 6.46347 2.42859 6.10914 2.42859Z" stroke="#CAB4A9" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
<Path d="M5.21418 2.42863V1.56263C5.21418 1.39129 5.14651 1.22696 5.02618 1.10596C4.96677 1.04606 4.89611 0.998491 4.81825 0.965998C4.74039 0.933505 4.65688 0.916726 4.57251 0.916626H1.89118C1.72118 0.916626 1.55785 0.984626 1.43785 1.10596C1.31742 1.22747 1.24975 1.39155 1.24951 1.56263V4.92529C1.24951 5.09663 1.31718 5.26096 1.43751 5.38196C1.55785 5.50296 1.72085 5.57129 1.89118 5.57129H2.78618" stroke="#CAB4A9" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round"/>
</Svg>
);

export default CopyIcon;