import { Circle, Defs, Image, Path, Pattern, Use } from 'react-native-svg';

const symbols = {
  toggle: {
    size: 24,
    content(color, scale) {
      return (
        <Path
          scale={scale}
          fill={color}
          d="M3.25 7a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0ZM11.25 7a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5h-8a.75.75 0 0 1-.75-.75ZM18 14.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5ZM3.25 17a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H4a.75.75 0 0 1-.75-.75Z"
        />
      );
    },
  },
  share: {
    size: 24,
    content(color, scale) {
      return (
        <Path
          fill={color}
          scale={scale}
          d="M.782 12.816c0-2.378.536-4.277 1.593-5.65C3.65 5.508 5.665 4.614 8.37 4.503V.672l7.85 6.68-7.85 6.679v-3.81c-1.642.045-2.882.282-3.87.737-1.066.492-1.84 1.226-2.674 2.178L.782 14.328v-1.512Z"
        />
      );
    },
  },
  arrowUp: {
    size: 24,
    content(color, scale) {
      return (
        <Path
          fill={color}
          scale={scale}
          d="M6 0C4.8 0 1.833 5 .5 7.5l3.5 1v13h3l1-13s2-.5 3.5-.5c0-2-4-8-5.5-8Z"
        />
      );
    },
  },
  shareOutline: {
    size: 8,
    content(color, scale) {
      return (
        <Path
          d="M.5 7.5V5a2 2 0 0 1 2-2h4M5 1l2 2-2 2"
          scale={scale}
          stroke={color}
        />
      );
    },
  },
  idCard: {
    size: 18,
    content(color, scale) {
      return (
        <>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            scale={scale}
            d="M8.972.688a.5.5 0 0 1 .37.17l1.625 1.846h3.822a2.5 2.5 0 0 1 2.5 2.5V15.72a2.5 2.5 0 0 1-2.5 2.5H3.063a2.5 2.5 0 0 1-2.5-2.5V5.204a2.5 2.5 0 0 1 2.5-2.5h3.829L8.598.849a.5.5 0 0 1 .374-.161Zm-.014 1.247L7.479 3.542a.5.5 0 0 1-.368.162H3.063a1.5 1.5 0 0 0-1.5 1.5V15.72a1.5 1.5 0 0 0 1.446 1.499 4.533 4.533 0 0 1 4.506-4.032h2.42a4.533 4.533 0 0 1 4.504 4.033h.35a1.5 1.5 0 0 0 1.5-1.5V5.204a1.5 1.5 0 0 0-1.5-1.5h-4.048a.5.5 0 0 1-.376-.17L8.958 1.935Zm4.473 15.286a3.533 3.533 0 0 0-3.497-3.033h-2.42a3.533 3.533 0 0 0-3.497 3.033h9.414Zm-4.546-6.146a2.226 2.226 0 1 0 0-4.452 2.226 2.226 0 0 0 0 4.452Zm0 1a3.226 3.226 0 1 0 0-6.452 3.226 3.226 0 0 0 0 6.452Z"
            fill={color}
          />
          <Path
            scale={scale}
            d="m9.342.857.187-.165-.187.165Zm-.37-.17.003-.25-.003.25Zm1.995 2.017-.188.165.075.085h.113v-.25Zm-4.075 0v.25h.11l.074-.081-.184-.17ZM8.598.849l-.184-.17.184.17ZM7.48 3.542l.184.17-.184-.17Zm1.479-1.607.188-.165-.184-.209-.188.205.184.169ZM3.009 17.22l-.008.25.232.008.025-.23-.249-.028Zm11.43 0-.248.028.024.223h.224v-.25ZM10.365 3.535l-.188.165.188-.165Zm3.066 13.687v.25h.288l-.04-.285-.248.035Zm-9.414 0-.247-.035-.04.285h.287v-.25ZM9.53.692a.75.75 0 0 0-.554-.254l-.006.5a.25.25 0 0 1 .185.084l.375-.33Zm1.625 1.847L9.53.692l-.375.33 1.625 1.847.375-.33Zm3.635-.085h-3.822v.5h3.822v-.5Zm2.75 2.75a2.75 2.75 0 0 0-2.75-2.75v.5a2.25 2.25 0 0 1 2.25 2.25h.5Zm0 10.517V5.204h-.5V15.72h.5Zm-2.75 2.75a2.75 2.75 0 0 0 2.75-2.75h-.5a2.25 2.25 0 0 1-2.25 2.25v.5Zm-11.726 0h11.726v-.5H3.063v.5Zm-2.75-2.75a2.75 2.75 0 0 0 2.75 2.75v-.5a2.25 2.25 0 0 1-2.25-2.25h-.5Zm0-10.517V15.72h.5V5.204h-.5Zm2.75-2.75a2.75 2.75 0 0 0-2.75 2.75h.5a2.25 2.25 0 0 1 2.25-2.25v-.5Zm3.829 0h-3.83v.5h3.83v-.5ZM8.414.68 6.708 2.534l.368.339 1.706-1.855L8.414.68Zm.56-.242a.75.75 0 0 0-.56.242l.368.338a.25.25 0 0 1 .187-.08l.006-.5Zm-1.31 3.274 1.478-1.608-.368-.338-1.479 1.607.368.339Zm-.553.242a.75.75 0 0 0 .552-.242l-.368-.339a.25.25 0 0 1-.184.08v.5Zm-4.048 0H7.11v-.5H3.063v.5Zm-1.25 1.25c0-.69.56-1.25 1.25-1.25v-.5a1.75 1.75 0 0 0-1.75 1.75h.5Zm0 10.517V5.204h-.5V15.72h.5Zm1.205 1.249a1.25 1.25 0 0 1-1.205-1.25h-.5c0 .947.75 1.717 1.688 1.75l.017-.5Zm.24.277a4.283 4.283 0 0 1 4.257-3.809v-.5a4.783 4.783 0 0 0-4.754 4.255l.497.054Zm4.257-3.809h2.42v-.5h-2.42v.5Zm2.42 0a4.283 4.283 0 0 1 4.256 3.81l.497-.055a4.783 4.783 0 0 0-4.754-4.255v.5Zm4.854 3.533h-.35v.5h.35v-.5Zm1.25-1.25c0 .69-.56 1.25-1.25 1.25v.5a1.75 1.75 0 0 0 1.75-1.75h-.5Zm0-10.517V15.72h.5V5.204h-.5Zm-1.25-1.25c.69 0 1.25.56 1.25 1.25h.5a1.75 1.75 0 0 0-1.75-1.75v.5Zm-4.048 0h4.048v-.5h-4.048v.5Zm-.563-.255a.75.75 0 0 0 .563.255v-.5a.25.25 0 0 1-.188-.085l-.376.33ZM8.77 2.1l1.408 1.6.375-.331-1.407-1.6-.376.331Zm4.909 15.086a3.783 3.783 0 0 0-3.745-3.248v.5a3.283 3.283 0 0 1 3.25 2.818l.495-.07Zm-3.745-3.248h-2.42v.5h2.42v-.5Zm-2.42 0a3.783 3.783 0 0 0-3.744 3.248l.495.07a3.283 3.283 0 0 1 3.25-2.818v-.5Zm5.917 3.033H4.018v.5h9.415v-.5Zm-2.57-8.122a1.976 1.976 0 0 1-1.976 1.976v.5a2.476 2.476 0 0 0 2.476-2.476h-.5ZM8.886 6.873c1.092 0 1.976.885 1.976 1.976h.5a2.476 2.476 0 0 0-2.476-2.476v.5ZM6.91 8.849c0-1.091.885-1.976 1.976-1.976v-.5A2.476 2.476 0 0 0 6.41 8.849h.5Zm1.976 1.976A1.976 1.976 0 0 1 6.91 8.849h-.5a2.476 2.476 0 0 0 2.476 2.476v-.5Zm2.976-1.976a2.976 2.976 0 0 1-2.976 2.976v.5a3.476 3.476 0 0 0 3.476-3.476h-.5ZM8.886 5.873a2.976 2.976 0 0 1 2.976 2.976h.5a3.476 3.476 0 0 0-3.476-3.476v.5ZM5.91 8.849a2.976 2.976 0 0 1 2.976-2.976v-.5A3.476 3.476 0 0 0 5.41 8.849h.5Zm2.976 2.976A2.976 2.976 0 0 1 5.91 8.849h-.5a3.476 3.476 0 0 0 3.476 3.476v-.5Z"
            fill={color}
          />
        </>
      );
    },
  },
  chatBubble: {
    size: 18,
    content(color, scale) {
      return (
        <Path
          d="M7.9 15.766v.886l.758-.458c3.3-1.992 5.334-3.43 6.58-4.71.732-.752 1.156-1.417 1.407-2.074.252-.659.355-1.376.355-2.276 0-3.344-2.626-6.083-5.9-6.083H6.9C3.626 1.05 1 3.79 1 7.134s2.626 6.083 5.9 6.083h.9c.04 0 .1.038.1.12v2.43Zm-.5-1.498v-.5h-.5c-3.52 0-6.4-2.955-6.4-6.634C.5 3.454 3.381.5 6.9.5h4.2c3.52 0 6.4 2.954 6.4 6.634 0 .893-.096 1.652-.347 2.362-.25.707-.662 1.392-1.325 2.125-1.343 1.484-3.681 3.127-7.684 5.508-.197.118-.399.237-.605.358a.077.077 0 0 1-.042.013.085.085 0 0 1-.042-.013c-.03-.018-.055-.052-.055-.107v-3.112Z"
          fill={color}
          stroke={color}
          scale={scale}
        />
      );
    },
  },
  chevronUpDown: {
    size: 20,
    content(color, scale) {
      return (
        <Path
          d="M8.234 7.264a.375.375 0 0 0 .532-.528l-.89-.897c-.334-.338-.608-.615-.852-.81-.253-.204-.51-.352-.82-.391a1.614 1.614 0 0 0-.408 0c-.31.04-.567.187-.82.39-.244.196-.518.473-.853.81l-.89.898a.375.375 0 0 0 .533.528l.874-.882c.355-.357.599-.603.805-.769.201-.161.33-.216.446-.231a.864.864 0 0 1 .218 0c.116.015.245.07.446.231.206.166.45.412.805.77l.874.881ZM8.766 13.264a.375.375 0 0 0-.532-.528l-.874.881c-.355.358-.599.604-.805.77-.201.161-.33.216-.446.231a.868.868 0 0 1-.218 0c-.116-.015-.245-.07-.446-.231-.206-.166-.45-.412-.805-.77l-.874-.881a.375.375 0 0 0-.532.528l.89.897c.334.338.608.615.852.81.253.204.51.352.82.391.135.017.273.017.408 0 .31-.04.567-.187.82-.39.244-.196.518-.473.853-.81l.89-.898Z"
          fill={color}
          scale={scale}
        />
      );
    },
  },
  plusInCircle: {
    size: 12,
    content(color, scale) {
      return (
        <>
          <Circle
            cx={6}
            cy={6}
            r={5}
            scale={scale}
            stroke={color}
            strokeWidth={0.5}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6 6v3h.5V6H9v-.5H6.5V3H6v2.5H3V6h3Z"
            fill={color}
            scale={scale}
          />
        </>
      );
    },
  },
  closeFilledBlack: {
    size: 26,
    content(color, scale) {
      return (
        <>
          <Path scale={scale} fill="url(#a)" d="M0 0h26v26H0z" />
          <Defs>
            <Pattern
              id="a"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <Use xlinkHref="#b" transform="scale(.01)" />
            </Pattern>
            <Image
              id="b"
              width={100}
              height={100}
              xlinkHref="data:image/png;base64,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"
            />
          </Defs>
        </>
      );
    },
  },
  likeOutline: {
    size: 13,
    content(color, scale) {
      return (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 11.51c-.792 0-1.5-.358-1.973-.92a1.76 1.76 0 0 1-3.308-.84V5.417a1.76 1.76 0 0 1 3.314-.828c.048-.08.1-.165.157-.256l1.234-2.006a1.192 1.192 0 0 1 2.193.806l-.132.856A1.122 1.122 0 0 0 9.094 5.28h.373c1.676 0 2.767 1.764 2.017 3.264l-.622 1.244a3.115 3.115 0 0 1-2.786 1.721H6.5Zm.116-8.757a.379.379 0 0 1 .697.257l-.131.855a1.934 1.934 0 0 0 1.912 2.229h.373a1.442 1.442 0 0 1 1.29 2.087l-.622 1.244a2.302 2.302 0 0 1-2.059 1.273H6.5a1.76 1.76 0 0 1-1.76-1.76v-1.86c0-.637.002-.893.057-1.136.018-.077.04-.153.065-.228.08-.236.212-.455.546-.997l1.208-1.964ZM2.979 4.47c.524 0 .948.424.948.948V9.75a.948.948 0 0 1-1.896 0V5.417c0-.524.425-.948.948-.948Z"
          fill={color}
          scale={scale}
        />
      );
    },
  },
  dislikeOutline: {
    size: 13,
    content(color, scale) {
      return (
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.98 1.76a1.76 1.76 0 0 0-1.761 1.76v4.334a1.76 1.76 0 0 0 3.314.828c.048.08.1.165.157.256l1.234 2.005a1.191 1.191 0 0 0 2.193-.805l-.132-.856A1.122 1.122 0 0 1 9.094 7.99h.373c1.676 0 2.767-1.764 2.017-3.264l-.622-1.244A3.115 3.115 0 0 0 8.076 1.76H6.5c-.792 0-1.5.359-1.973.922A1.76 1.76 0 0 0 2.98 1.76Zm.947 1.76a.948.948 0 1 0-1.896 0v4.334a.948.948 0 0 0 1.896 0V3.521Zm.87 3.809c-.055-.243-.057-.499-.057-1.136v-1.86c0-.972.788-1.76 1.76-1.76h1.576c.872 0 1.67.493 2.06 1.272l.621 1.245a1.442 1.442 0 0 1-1.29 2.087h-.373a1.934 1.934 0 0 0-1.912 2.229l.131.855a.379.379 0 0 1-.697.257L5.408 8.553c-.334-.542-.466-.761-.546-.997a2.304 2.304 0 0 1-.065-.228Z"
          fill={color}
          scale={scale}
        />
      );
    },
  },
  heartInBubble: {
    size: 13,
    content(color, scale) {
      return (
        <>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.041 3.361c-.403-.41-.862-.544-1.295-.513-.413.03-.776.208-1.03.37a.427.427 0 0 1-.432 0c-.254-.162-.617-.34-1.03-.37-.433-.031-.892.102-1.295.513-.474.483-.62 1.08-.561 1.67.057.577.308 1.151.631 1.65.325.5.74.95 1.16 1.28.403.314.876.57 1.311.57.435 0 .908-.256 1.31-.57.42-.33.836-.78 1.16-1.28.324-.499.575-1.073.632-1.65.059-.59-.087-1.187-.56-1.67Zm-1.89.542c.199-.126.43-.228.654-.244.204-.015.427.037.656.271.277.282.372.627.333 1.021-.04.407-.225.857-.505 1.287a4.58 4.58 0 0 1-.98 1.082c-.365.286-.655.399-.809.399-.154 0-.444-.113-.81-.399a4.58 4.58 0 0 1-.98-1.082c-.279-.43-.464-.88-.504-1.287-.039-.394.056-.739.333-1.021.23-.234.452-.286.656-.271.225.016.455.118.654.244.389.247.913.247 1.302 0Z"
            fill={color}
            scale={scale}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8.854.715C8.385.677 7.803.677 7.06.677H5.94c-.743 0-1.325 0-1.794.038-.476.04-.87.12-1.227.302a3.115 3.115 0 0 0-1.36 1.36c-.182.357-.263.751-.302 1.228-.038.468-.038 1.05-.038 1.793v2.309a2.45 2.45 0 0 0 2.449 2.45h.326a.19.19 0 0 1 .177.26c-.372.93.699 1.77 1.513 1.189l1.415-1.01.026-.02c.384-.27.842-.417 1.312-.42h.056c.154 0 .247 0 .32-.003a3.115 3.115 0 0 0 2.965-2.964c.003-.074.003-.158.003-.297V5.398c0-.743 0-1.325-.038-1.793-.039-.477-.12-.87-.301-1.227a3.115 3.115 0 0 0-1.361-1.361C9.724.835 9.33.754 8.854.715ZM3.288 1.74c.223-.113.498-.18.925-.215.43-.035.98-.035 1.745-.035h1.084c.765 0 1.314 0 1.745.035.427.035.702.102.925.215.433.221.785.573 1.006 1.007.113.222.18.497.215.924.035.431.036.98.036 1.746v1.462c0 .156 0 .22-.003.272a2.302 2.302 0 0 1-2.19 2.19 7.63 7.63 0 0 1-.299.003h-.046a3.115 3.115 0 0 0-1.774.568l-.03.022-1.415 1.01c-.154.11-.358-.049-.287-.225a1.003 1.003 0 0 0-.931-1.375h-.326a1.637 1.637 0 0 1-1.637-1.637v-2.29c0-.765 0-1.315.036-1.746.035-.427.102-.702.215-.924.22-.434.573-.786 1.006-1.007Z"
            fill={color}
            scale={scale}
          />
        </>
      );
    },
  },
  feed: {
    size: 24,
    // this symbol doesn't allow color manipulation
    content(color, scale) {
      return (
        <>
          <Path scale={scale} fill="url(#a)" d="M0 .385h24v24H0z" />
          <Defs>
            <Pattern
              id="a"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <Use xlinkHref="#b" transform="scale(.01042)" />
            </Pattern>
            <Image
              id="b"
              width={96}
              height={96}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAYKADAAQAAAABAAAAYAAAAACpM19OAAADmElEQVR4Ae2cO24UQRCG14gEDBkSICAAEiI4CBKEBHACiwARwx0QGRIZnMCAuAMEhEQ44iHxSBDCgQ3mb+yVe4epVbV3qnuX/UYq01NbU9X9/dvtGgKPRlwQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAgXACK54KO7o8cf9LzIquWms5VKsQdfoJIEA/l2peBKiGur8QAvRzqeZFgGqo+wsd7nf7vDW7Bd+MyqLmobtjB5RpNng0AgyOtCwhApTxGjwaAQZHWpYQAcp4DR49UxdkzWYeuot8bvPcrbEDcqUajBGgAfS8JALkNBqMEaAB9LwkAuQ0GoxDuiBrHdHdyLx1XxaH3M8OyGk0GCNAA+h5yapH0KIcEUPN03PksgPyr2ODMQI0gJ6XRICcRoMxAjSAnpdEgJxGg3FIF+T57d9gre6SpfOfpWtiB7hliQlEgBiu7qwhR9AsW9La/hE53ZQCA9kBgXA9qRHAQykwBgEC4XpSI4CHUmAMAgTC9aQO6YKsTsYzISsmIqdVq6afHVCTdk8tBOiBUtMVcgRFvDRF5KwJ2qrFDrDIVPIjQCXQVhkEsMhU8iNAJdBWGQSwyFTyh3RBES9NETkrMZ5ahh0wFU/8hwgQz3hqhZAjKOKlKSLnVDKVPmQHVAJtlUEAi0wlPwJUAm2VQQCLTCU/AlQCbZXxdkE/lOBYN4k6k6N6QfrZ9Ue8NEXk1Lw3ZUe687fW1Y1L94r9h8te3Pe++K7PuwM+dh/cu79o+BfF/dmYaMm6Lhg5Phn+CbdXgI2Jp/Zvru0PF3L0xph1ybquGzneGf5yt7bZbVnf9UXOk+UZ5+MJzX2tb1HyudaluNOyb0aOtcFWqQLnZNtGoVfynxqsWMVEmvcJ2eZB1qVnEvzXxrNb8p8ddClK+NgoltxfZfdkl2WrgxYOTqb5PpBZ18S6FLQquyK7L7O++fpo55F32u6/kaykZ5T0rey4N/mSxqXu55K6tkF/CY+U8IMS35D9WlKwnmX/VtAtL/yU0NsF/S2uxC81uCtLhbgmCSQmd8To2aR7+p37CMrT6DhKbdpTGcfRLph07NwU/Oe7t/6fRTtgnFaF1jVOLysPZdtj/xL+m771T2TpzC+Gn3gdaAekB8eXdkNqt9LLyFXZeVm6t17P9dFCX+m/ZN7LNmQvZOsCn+65IAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAALzTOAP8dmnp+36850AAAAASUVORK5CYII="
            />
          </Defs>
        </>
      );
    },
  },
  markets: {
    size: 24,
    // this symbol doesn't allow color manipulation
    content(color, scale) {
      return (
        <>
          <Path
            scale={scale}
            opacity={0.799}
            fill="url(#a)"
            d="M0 0h24v24H0z"
          />
          <Defs>
            <Pattern
              id="a"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <Use xlinkHref="#b" transform="scale(.01389)" />
            </Pattern>
            <Image
              id="b"
              width={72}
              height={72}
              xlinkHref="data:image/png;base64,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"
            />
          </Defs>
        </>
      );
    },
  },
  portfolio: {
    size: 24,
    // this symbol doesn't allow color manipulation
    content(color, scale) {
      return (
        <>
          <Path
            scale={scale}
            opacity={0.799}
            fill="url(#a)"
            d="M0 0h24v24H0z"
          />
          <Defs>
            <Pattern
              id="a"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <Use xlinkHref="#b" transform="scale(.01333)" />
            </Pattern>
            <Image
              id="b"
              width={75}
              height={75}
              xlinkHref="data:image/png;base64,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"
            />
          </Defs>
        </>
      );
    },
  },
  profile: {
    size: 24,
    // this symbol doesn't allow color manipulation
    content(color, scale) {
      return (
        <>
          <Path
            opacity={0.799}
            scale={scale}
            fill="url(#a)"
            d="M0 0h24v24H0z"
          />
          <Defs>
            <Pattern
              id="a"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <Use xlinkHref="#b" transform="scale(.01333)" />
            </Pattern>
            <Image
              id="b"
              width={75}
              height={75}
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAYAAAA4TnrqAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAS6ADAAQAAAABAAAASwAAAACEC2e7AAAH9klEQVR4Ae2baWxVRRTHu1IKLSVFYqChDdhQhGhKF7BSsUECakJZtARF/ACaqIhL9IN+MBo0KiiGGAKfxIQALmgQJFESwaIispWWWFAoIGsxSGkL2rK09XdIa25PXy/v3TvzSsydpLw5Z2bO+c//nlnvJSYmSAEDAQMBAwEDAQMBAwEDAQMBAwEDAQP/SwZib5Ze5efnJ8bHxw9tbW0dGBsbm9zW1tYUFxd3rk+fPkfLy8uv3Qw4e5QsCLoNUh6DiEkQVMhvYghSrqLbxd9myFuze/fuoyHqREXVI2RBUh4kvQ5BU+hlJBjaqL8R0t6AtMqoMORwEglQRzNv2aKiouTLly8vhqSnsRDvzcr1Vi38uyw1NfUVhmizDzsRNY0aWaNHj84iIr4G3R0RIXSvXEVx6d69e0+4VzNTGhWyxowZM7ylpWUrkDNcYFcTcdspr2WI1pFPJz+IfDG/I13ancL2hMrKysMudYwUWSeL+WkQSHfwlxUCsQyh5RCyoqKioiZE+XVVXl5edvvQnY8iKUS9YwkJCUU7d+78M0SZMZVVssrKyuKPHDmyhY7eqxGj2wJJcyMZQu1DeSW2Jmh7yFuHDRs2ad26dTKfWUl+JtkbAkpOTn4OUp4KUXEFk/PsHTt2XAhR1q3q7NmzDTk5OWuvXLkykEqy1XCmofX19efOnDkj2wwryVpksfKl06ljoO6nkK8hmuagk22A1xTL8F5N40eVgXrmr6HMX/VKb0SMM2IlhBG2CAtQa6Iqiagn0PshSry19erVS+zsF8GR+nMKeNYhG83aIiuO4TdPI+Uo87KpfRFDuAkfz2sfyEKilX5ZMcoQuRvAQ1RHvt+3b98WpfMl7tmzpxwD8udMWSwEY50KU3krZAFuggbIyvep1hmSP9N22Pzep3UmZFtk5WpwDBnZvRtP165d62KXB9PFvwnHtsgapsDVswLWKp0Rsaqq6jSGGp3GeDDav7PYc94WWf0VIitEOXycceQlq/2rYm+iLbL0/k3upGymK8q4lc22LbLqFXg5H9pM+oBeZ8OZFbKYM/SwGDBq1KgUGx0YN25cKnblhsKZtH9nmee8FbJYjSoVojjOiZOVzojY3Nx8P4Y6DXv87zNiXBmxQhY+flJ+YujADK0zJE/Xdthnyb2Y8WSFrIaGhu9A2mk5R57JvdTtJntQUFCQg72Hlc36pqYmoyeFDvtWyKqpqblMJH3S4aT9N4G57G2l8yVy1lyMAf1GaG11dbVeHX356Whshax24+/z29LhqP13GtHwotJ5Ejl/vgT5paqx+PtA6YyJVvYjgq62trZu8ODBt5DVh9qJGRkZh7ik+9VrLyB8Fm1X8Kcf9jJOCmu92r1RO2tkiePMzMztDJXZZNMcQKSDD0FkfHFx8Q8HDhwI+26rpKQkIT09fSHtl/KniTreu3fvspMnT1oZgoK/05IrCtOJST2f4fIjdpND2D5A2atctchh2I20WKKplHnwHeqFWiSa0BcTVRUhfBhTWSdLkNLRqXT0c7K9ukEuh+GN1PkZ8k4TjXUs/+nIGcjjKJM313qX3mFKFpMy3g51uX3oqGDqNypkCVgIe5BOyQrZzxR47DRC5iwi8xuDNrs1FTWyBAEr2Ah+ZMM6QGSf6TztZej95tNO2M2tTvBOFIWFhROJrOXobnPqfeT70LaEheIvVt6DPuyE3dR6ZMmre24zP2a4yL28rbSdtzpzd+3adciWA7FrlSyGnbxpkWW+rzhzSRcpOwihh4g+OSaJnIrcD3k4eVkB5XbBLV2i/gvMXx+5VfJTZoUs2Q81NjauBPwcF3DHKVtFnU0pKSkVbl/3ib2LFy/mQ9wU6svHb1kudlfxbnKemz2Xtq5FxsnKzs5OSktLkzc507rxXEmH3yIC1lPe2k0dN3UcK+sMiHuNSnd2U3E9VzezTJ8R9S64G9/hqRl2iRC1gdqhiJKhNZ+PNwog6kvyXogSIK20/wI7eZC+AFns6jQ9KSnpK8GjC/zIRiMLcB8CRjqgUyXfIMy08Q0VUZZDlMmGt0uUQeZSiDVycJcOGds6APoR7MmViU7lfDs12darMA7k5zkvrsZHAY71tuQuthZ/sLWo0qC8yEYiq/27qWoA6FWvnMn2AVPfN7h1kEWg96VLlzYTZeNVvb+RR/KwTih9xKKROYtznESUJup3nvbUaBAlvRY/EFVK9rDIjtQX/SKH7DnrO7KIqvGQtU0hEOBjOdzuV3rrIieFXA7iv+AoyeFMbjTGE11d3g046tww6zuy2Dm/qb0wsS7qCaIER/v38e8pTBIUC5UuYtEXWax+I4ige5TXU2wy31W6aIty71WrnJbI0UvpIhJ9kYWnJ/nrNJQhb0m05qnuespw+4eyJao8luEpxy/PyQ9ZQpJcGTtTU2JionxN3OOJfZ2cETv97wsepByVOj3cSIB6Jot9lYT0rU5ngNnAt+j6faGzStTy7R/hblIOB+Xm5mYrXdiiZ7JCzFUxTOzfhu05OhU3azes3MVaF67sh6yiEE58Lc0h7PlSMRS3aQM8UM/3ap7JAkSmAtLExHpM6XpUZCgeAUCneQt5iFdQnsniCaUrp8eRvd4kKFPGRMFzQlmTF7+ekmey8KadNnhCYLkRc6vGpXGHjSAh7JqqIhPl46j+uy9ifrigqtwUImQ9wymjvwPMVUc+yAYMBAwEDAQMBAwEDAQMBAwEDAQMBAwEDMTE/AuUtmU4l4yQ6QAAAABJRU5ErkJggg=="
            />
          </Defs>
        </>
      );
    },
  },
};

export default symbols;
