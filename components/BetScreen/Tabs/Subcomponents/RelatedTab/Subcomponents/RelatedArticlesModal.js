import { Suspense, useContext } from 'react';
import { useResource } from '../../../../../../utils/CustomHooks/useResource';
import { BetScreenContext } from '../../../../BetScreenContext';
import OverlayModal from '../../OverlayModal';
import { CommentsScrollerFallback } from '../../ReactionsTab/Subcomponents/CommentsModal/Subcomponents/CommentsScroller';
import RelatedArticlesScroller, {
  getAllRelatedArticles,
} from './RelatedArticlesScroller';

function RelatedArticlesModal({ visible, onClose: handleClose }) {
  const { betID } = useContext(BetScreenContext);
  const allRelatedArticlesResource = useResource(
    getAllRelatedArticles.bind(null, betID),
    []
  );
  return (
    <OverlayModal visible={visible} heading="Related" onClose={handleClose}>
      <Suspense fallback={<CommentsScrollerFallback />}>
        <RelatedArticlesScroller dataResource={allRelatedArticlesResource} />
      </Suspense>
    </OverlayModal>
  );
}

export default RelatedArticlesModal;
