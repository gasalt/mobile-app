import Svg, {
  SvgProps,
  Path,
  Defs,
  Pattern,
  Use,
  Image,
} from "react-native-svg";
const BigOptimism = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path fill="url(#a)" d="M.5 0h24v24H.5z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use xlinkHref="#b" transform="scale(.01042)" />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAMPWlDQ1BJQ0MgUHJvZmlsZQAASImVVwdYU8kWnltSIaEEIiAl9CZIr1JCaAEEpIONkAQIJcZAULGXRQXXLhawoasiipUidsTOotj7YkFEWRd1sStvUsCyr3xvvm/u/PefM/85c+7MvXcA0DjBk0jyUE0A8sWF0riwIFZKahqL1AXIgA6owApo8fgFEnZsbBSAZaD9sby9ARB5e9VBrvXP/v9atATCAj4ASCzEGYICfj7EBwHAK/kSaSEARDlvPqlQIsewAh0pDBDiBXKcpcSVcpyhxHsVNglxHIhbACCr83jSLADolyHPKuJnQQ16L8ROYoFIDIAGC2L//PwJAojTIbaBNhKI5fpeGd/pZP2gmTGoyeNlDWLlXBSFHCwqkOTxpvyf6fjfJT9PNuDDClb1bGl4nHzOMG+3cidEyrE6xD3ijOgYiLUhfi8SKOwhRqnZsvBEpT1qyC/gwJwBJsROAl5wJMSGEIeK86KjVHxGpiiUCzFcIehkUSE3AWI9iBcIC0LiVTabpBPiVL7Q+kwph63iz/GkCr9yXw9kuYlslf7rbCFXpY/Ri7MTkiGmQmxRJEqKhpgOsWNBbnykymZEcTYnesBGKouTx28BcZxQHBak1MeKMqWhcSr70vyCgflim7JF3GgV3l+YnRCuzA/Wwucp4odzwS4LxezEAR1hQUrUwFwEwuAQ5dyxZ0JxYrxK572kMChOORanSvJiVfa4mTAvTM6bQexWUBSvGosnFcIFqdTHMyWFsQnKOPHiHF5ErDIefCmIAhwQDFhABmsGmABygKitp6EH3il7QgEPSEEWEAIHFTMwIlnRI4bXeFAM/oRICAoGxwUpeoWgCPJfBlnl1QFkKnqLFCNywVOI80EkyIP3MsUo8aC3JPAEMqJ/eOfByofx5sEq7//3/AD7jWFDJkrFyAY8sjQGLIkhxGBiODGUaIsb4P64Lx4Fr4GwuuBeuPfAPL7ZE54S2gmPCNcJHYTb40VzpD9FORJ0QP1QVS4yvs8FbgU13fEg3A+qQ2WciRsAB9wN+mHjAdCzO2Q5qrjlWWH9pP3DDL57Gio7ihMFpQyhBFJsfh5Jt6O7D6rIc/19fpSxZgzmmzPY87N/znfZF8A28mdLbAF2ADuLncTOY0ewBsDCjmONWCt2VI4HV9cTxeoa8BaniCcX6oj+4W/gycozWeBU49Tt9FnZVyicLH9HA84EyRSpKCu7kMWGXwQhiyvmOw5juTi5uAIg/74oX19vmIrvBsK88I2bWw2A36H+/v7D37gI+G7dlw63f903zmYs3FpdAJw7wpdJi5QcLr8Q4FtCA+40fWAMzIENnI8L8AC+IBCEgAgQAxJAKhgHo8+G61wKJoFpYDYoAWVgKVgF1oGNYAvYAXaD/aABHAEnwRlwEVwG18FduHo6wQvQC96CTwiCkBAawkD0ERPEErFHXBAvxB8JQaKQOCQVSUeyEDEiQ6Yhc5EyZDmyDtmMVCP7kEPISeQ80o7cRh4i3chr5COKoeqoDmqEWqHDUS+UjUaiCehYNAudiBaj89DF6Bq0Ct2F1qMn0YvodbQDfYH2YQBTw5iYKeaAeWEcLAZLwzIxKTYDK8XKsSqsFmuCz/kq1oH1YB9wIs7AWbgDXMHheCLOxyfiM/BF+Dp8B16Pt+BX8Yd4L/6VQCMYEuwJPgQuIYWQRZhEKCGUE7YR6gin4V7qJLwlEolMojXRE+7FVGIOcSpxEXE9cQ/xBLGd+JjYRyKR9En2JD9SDIlHKiSVkNaSdpGOk66QOknvyWpkE7ILOZScRhaT55DLyTvJx8hXyF3kTxRNiiXFhxJDEVCmUJZQtlKaKJconZRPVC2qNdWPmkDNoc6mrqHWUk9T71HfqKmpmal5q41SE6nNUlujtlftnNpDtQ/q2up26hz1Meoy9cXq29VPqN9Wf0Oj0axogbQ0WiFtMa2ador2gPaezqA70rl0AX0mvYJeT79Cf6lB0bDUYGuM0yjWKNc4oHFJo0eTommlydHkac7QrNA8pHlTs0+LoeWsFaOVr7VIa6fWea1n2iRtK+0QbYH2PO0t2qe0HzMwhjmDw+Az5jK2Mk4zOnWIOtY6XJ0cnTKd3TptOr262rpuukm6k3UrdI/qdjAxphWTy8xjLmHuZ95gfhxiNIQ9RDhk4ZDaIVeGvNMbqheoJ9Qr1dujd13voz5LP0Q/V3+ZfoP+fQPcwM5glMEkgw0Gpw16huoM9R3KH1o6dP/QO4aooZ1hnOFUwy2GrYZ9RsZGYUYSo7VGp4x6jJnGgcY5xiuNjxl3mzBM/E1EJitNjps8Z+my2Kw81hpWC6vX1NA03FRmutm0zfSTmbVZotkcsz1m982p5l7mmeYrzZvNey1MLEZaTLOosbhjSbH0ssy2XG151vKdlbVVstV8qwarZ9Z61lzrYusa63s2NJsAm4k2VTbXbIm2Xra5tuttL9uhdu522XYVdpfsUXsPe5H9evv2YYRh3sPEw6qG3XRQd2A7FDnUODx0ZDpGOc5xbHB8OdxieNrwZcPPDv/q5O6U57TV6a6ztnOE8xznJufXLnYufJcKl2uuNNdQ15muja6v3OzdhG4b3G65M9xHus93b3b/4uHpIfWo9ej2tPBM96z0vOml4xXrtcjrnDfBO8h7pvcR7w8+Hj6FPvt9/vJ18M313en7bIT1COGIrSMe+5n58fw2+3X4s/zT/Tf5dwSYBvACqgIeBZoHCgK3BXaxbdk57F3sl0FOQdKguqB3HB/OdM6JYCw4LLg0uC1EOyQxZF3Ig1Cz0KzQmtDeMPewqWEnwgnhkeHLwm9yjbh8bjW3N8IzYnpES6R6ZHzkushHUXZR0qimkejIiJErRt6LtowWRzfEgBhuzIqY+7HWsRNjD48ijoodVTHqaZxz3LS4s/GM+PHxO+PfJgQlLEm4m2iTKEtsTtJIGpNUnfQuOTh5eXJHyvCU6SkXUw1SRamNaaS0pLRtaX2jQ0avGt05xn1MyZgbY63HTh57fpzBuLxxR8drjOeNP5BOSE9O35n+mRfDq+L1ZXAzKjN6+Rz+av4LQaBgpaBb6CdcLuzK9Mtcnvksyy9rRVZ3dkB2eXaPiCNaJ3qVE56zMeddbkzu9tz+vOS8Pfnk/PT8Q2Jtca64ZYLxhMkT2iX2khJJx0Sfiasm9kojpdsKkIKxBY2FOvBHvlVmI/tF9rDIv6ii6P2kpEkHJmtNFk9unWI3ZeGUruLQ4t+m4lP5U5unmU6bPe3hdPb0zTOQGRkzmmeaz5w3s3NW2Kwds6mzc2f/PsdpzvI5f89Nnts0z2jerHmPfwn7paaEXiItuTnfd/7GBfgC0YK2ha4L1y78WioovVDmVFZe9nkRf9GFX51/XfNr/+LMxW1LPJZsWEpcKl56Y1nAsh3LtZYXL3+8YuSK+pWslaUr/141ftX5crfyjaupq2WrO9ZErWlca7F26drP67LXXa8IqthTaVi5sPLdesH6KxsCN9RuNNpYtvHjJtGmW5vDNtdXWVWVbyFuKdrydGvS1rO/ef1Wvc1gW9m2L9vF2zt2xO1oqfasrt5puHNJDVojq+neNWbX5d3BuxtrHWo372HuKdsL9sr2Pt+Xvu/G/sj9zQe8DtQetDxYWceoK61H6qfU9zZkN3Q0pja2H4o41Nzk21R32PHw9iOmRyqO6h5dcox6bN6x/uPFx/tOSE70nMw6+bh5fPPdUymnrrWMamk7HXn63JnQM6fOss8eP+d37sh5n/OHLnhdaLjocbG+1b217nf33+vaPNrqL3learzsfbmpfUT7sSsBV05eDb565hr32sXr0dfbbyTeuHVzzM2OW4Jbz27n3X51p+jOp7uz7hHuld7XvF/+wPBB1R+2f+zp8Og4+jD4Yeuj+Ed3H/Mfv3hS8ORz57yntKflXSZd1c9cnh3pDu2+/Hz0884Xkhefekr+1Pqz8qXNy4N/Bf7V2pvS2/lK+qr/9aI3+m+2/+32d3NfbN+Dt/lvP70rfa//fscHrw9nPyZ/7Po06TPp85ovtl+avkZ+vdef398v4Ul5il8BDFY0MxOA19sBoKUCwID/ENTRyvOfoiDKM6sCgf+ElWdERfEAoBY28t94zgkA9sJqNQueEwMBkP/CJwQC1NV1sA6c1RTnSnkhwnPAJjc5usLM3wh+Ksoz53dx/9wCuapi+A/tvwC+4XvJ+UQdlAAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACK+310AAAKuElEQVR4Ae1dPYwkRxV+MztO8TggAmnnQhNwexISRL49yThB8p2EEwK8d3ZAZO4sROhjz45t3+GIBN+agMSW10YkgHS7JsES0s0SQEBwcxJEBMxBeLfb/r7qrpme/nlV3V09O3PbTxp1d3XVq6rvvXrvVXV3TU9WlCIZDWUgW3Ii56Uv59DMTfxGEskQx6H0zHHe+kimuJgifWKOIg9R9gHKHskTGSOZ91eOeqvSIgP4hlwBYBcB3DaAHAVu2xjCG4PngRzLIQQyCcy/FrtTFYABvS87AP0KWr9dqwf1Cx1AIHdPWxinIoBoMCLYv8CPx1WgfQhjr3c82V92Y5YmgJm29+RGC+YlDG6R8R+7EMReGIZuLksRQPTM6Drs+m7Ocbrbdzo5liiIVgVgTE0kH66sxrvEuwRBtCIAmJuRbMj7AJ7Odf0pdta32oicggsA5mYH5ub22pgbX/VoaTQEE4BxsgMT2dzw7dOa5ruNiR1HwzRE+4MIIDE599bW1ldFkqPhWC6FMEn9qnVn8wP8Ldj7+2cGfALQE/q4ezC3W1k8ql43EoCx9wMD/rBqxWufn0KI5L7BoEFnagsAFV83U/kGlT8VRREhAYvafq+WD0jAv/1UABiqEz15s/d4UhmTygIwQ45xcUd5BHpyFULYy98oT6kkAONwafM7KkegJxcghHF5hsU73j4gCTU/XSzeXeUQiBAdyWiUSy9J8BoBYDg8c6FmCWBeyfE84YLPZM1vBHCGy7CrIz8EiFW8KuDM7xwB0cboKsD/0Mmpy5BHwMMpqwJI7P7ZWWLIQ9g0ZYp1I5qiSRkj3QRtmIcoo7LCXboTAb7Z8b6Wq3QEdKZHg63yvUu9J5ODolKaAB50jrcIshppiIrwnPlcUclCE5Ro/6ioQJdWAwFERWXrRYUjAALotL8Gzo4idMjnsnOD3AjotN8BY/3bQ3lGrmaL50ZAp/1ZiAJeF/iChREA8K90jjcg4FlW9AXxW4GzOwsCQOrO7E530hYCfCVzRjMTZGa9A7zO3VH7CDyR56wzno+ADdluv+auBoNAyhkPZpD0lmR+hl8Tefn7Ihe/J3L+WyLP4nr0zVkzZPIvfFqB39HfRT77g8gXX87vVT0j/59eq1Zq+j985oEf65/8W+RvOIamSC6DpXl8aUzQUszPCwD85vUY+CodojDeRls/+qRKqTjvX38fC7l6yXkJ1n/4F5F37kAgOA9FiRmKBdD2kvO7b0ETX2vWdILwyk9i7fThxJH2nyOfnH55OCqoCB8EWpmP5BqWJ+5aH7Dt14qKuQgCtbAp+KyWJutPv8XXYeDpQ9+G+QlJrPe9myJvYRSHIH6KBYoF0MOHcG0QAaMdDkXk5QvAxe+GqnWRz80bUIYAvPkdHKhvnvcKvkYMTTQ7IcG37eNoSjttm549csS0Ra++0pwzJ2V41j4wn4I2Z7fI4eWX3GaHNpX29KOP587NRi2uDv74h7FTXKx18UoTPiOcn72zmN9ebSIi4yjThBxKuPgMd4Clhy28YhiWqP0aEQA61GxUwfTXfy7yCMJ5A5peRgSAUUkZEXzNV9Ch81dGjHxoPsuIQgpBwL4P8EcheM14MNzUtIedKwJ/xgAndxyRhsaffEbfSHPLnx865hYUDkdo2wTsKYDNoPXswDxo9LZHPE0hNSEqgUbZkVeUVxtBHKlhCALIfvLflDHtfxkRWNr8puTSTs3+s6xrdquVZ9t9BOjXx82wJoiap2mOZnfTDW4KgOYkfbTXtXzx+R/Tra1/jn0vwo4AF3Au22u74rLhGogu8+NSAgYQWhTGEfQ51qhCEKzPAHyGIXgZHpexyKbRF0rkkS7nmsUe/SOde/HcpQQE8IXMRIpOnZENgXc5eILvMoGLLdKujAC0DNXuaZ2n/fe1nZoJYYs0G+6apXI5oS6xD1r4W4NvvBRRo2CuCMHX7P+4QuSgCZLapwnSpcG5hldI4BxFq7sCK5s1nABcdttle22LXILU+FABNOHZOqoeKXSCr9VdlWeSnwKY1iy7WMzl/DSzkeZ0/vn0Vf5cA8HlO/Lc3Cms78UfhQmf87VNB5iIcZuv5o7YpXma40w3rE37n65HO6fG09nyIZAmcI2Hzz1gz7WgMCNAEwA7xJ8PaSOJPLRQ1iU8PlApoun/sf70CD8cGeIGtvNFVZo0PJnnCJhACFulmXxvaA7Yl8erWMbQnKgr/taUoIUIxrdbSr5HnIg9VDKEuUXhuARkloFv6PVpyxgEX6ujShSmtyLk3QkFMAnC0TVs37hWXg2B++RXuvZTgzXzEyoKK29l+DuJCRoH4UzbqZkPPsoj/QaOzQrLzD5hdviUS9NeluMqqkaa72A53yhMqyP0PWyj2TOPJAfy38a8L2MV9GNocRtE08M4XCM+QNGc8Nfx2Ns3ENDqCXnPvJoChsHeiP7nn/VRUKfxND3f+YEbvMcPyrlzdJLHatEYny1dsDPhwyBtq/Lejk+FBJ+TIJfmusyPtnrq04428sS7+CavpXA73xBkNc3a+CY8+VoitdaHlxZ+sg2rGQEdsGnxCDiWfV4EIau1H/zarblFFdqpf5XR5Fy+cDwDLmpH22nYv5pV9Gw9+HDgHs637XWQIyMbPqLky7iMkLKaStPCH58TjLHG/ztovY/GZxvHAIB1FBGXQH4JZVgtOoD9v8QmzQXAXZ8i/aPi1erDGrcmwr5CyfbI1gmLPJa7a9yl9Wp6Yn7Y6JkAki82DtarJ2vZ2s+A9cS2fCaAJOGWvdEdW0KAe2mnaOYDbFqwSZll2B3nCLg+UzU5++JYdJnz684qI7CbLZEfAXhlGm9Mc14/zGburhsgUKD95Jb1AYhLsSn1iXS+oAHWJUV3i9JzI8Bm6nyBRSLAsUT7yTk3AmbV9eTa7Lw7aYrAbhmDUgEkOzyFWyMqa8HTno5dhu2st6irpQIwmZ/ImzhOiwp2aR4I8IWHY92fqgIwM7bICMGjti5LAQK76VlvwX3FByS5+TExTru5QRF6etodzfTYoqVRkM3Ao3lufNb+JSMNQNXz2PSE27rYzA3wnyloR+cPXMKIwb9kMHPlxX2vEWD5YOc/ftJ63153xwIE4p1yxwV3CpNUJ5wtYfbFxyYT2fTuOkEAcydovjf4LFVJACxgnPJJFxkRiwWK/8Lk7kKax0UlE5TmF/XxCLPfPcI0mNT8/xiWrS0AFsZ60VVwWHjAwPQzRTQ7j02oXqvbjQTAGo1jPpFPIYhRrRasayF+2BL/m14lm5/tbmMBkCHmCeaf5c6MEOah5iQLaNXryk64qAIz3T6WC7h3FmbMd6D56p8yFGFUlhZkBKSZG7/A/4t/2kwSTY6Yfd720/1teh5kBKQbYcJUzpoj2Uunr/V5hFc3qfXHk6DgE5PgIyAN9NqPBtp6Rjkl/36R7mvd81YFYBu1doKguenjT5tr/Dek7bPvcSkCsI1ZeUFQ4yPsaHsie76LabZvdY9LFYBtJATBbfJ3cH3Fpp3y8QD132rT1JT171QEYBuTzB+2E2Fs2/QlHQ+g6fvL1Paifp2qANINmglDhALBF3UBPh5frGACu07QDxHR7C/LxKSbUHS+MgLINs48hcO+mgDsPIA7h/ub+A057TbH7P4WcZzOfS8Yr0/we4iyD1D2CH+eM14VwNGuBfoK0m4Tl6zLwZAAAAAASUVORK5CYII="
        id="b"
        width={96}
        height={96}
      />
    </Defs>
  </Svg>
);
export default BigOptimism;
