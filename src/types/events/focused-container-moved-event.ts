import { WmEventType } from '../wm-events';
import type { Window, Workspace } from '../containers';

export interface FocusedContainerMovedEvent {
  type: WmEventType.FOCUSED_CONTAINER_MOVED;
  focusedContainer: Window | Workspace;
}
