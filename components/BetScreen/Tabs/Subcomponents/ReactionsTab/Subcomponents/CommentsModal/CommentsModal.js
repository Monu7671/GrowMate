import { Suspense, useContext } from 'react';
import { useResource } from '../../../../../../../utils/CustomHooks/useResource';
import { BetScreenContext } from '../../../../../BetScreenContext';
import OverlayModal from '../../../OverlayModal';
import CommentsScroller, {
  CommentsScrollerFallback,
  getAllComments,
} from './Subcomponents/CommentsScroller';
import DisclaimerBanner from './Subcomponents/DisclaimerBanner';
import ModalCommentInput from './Subcomponents/ModalCommentInput';

function CommentsModal({ visible, onClose: handleClose }) {
  const { betID } = useContext(BetScreenContext);
  const allCommentsResource = useResource(getAllComments.bind(null, betID), []);
  return (
    <OverlayModal visible={visible} heading="Reactions" onClose={handleClose}>
      <DisclaimerBanner />
      <ModalCommentInput />
      <Suspense fallback={<CommentsScrollerFallback />}>
        <CommentsScroller dataResource={allCommentsResource} />
      </Suspense>
    </OverlayModal>
  );
}

export default CommentsModal;
