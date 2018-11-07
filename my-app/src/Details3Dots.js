import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';

class Detailed3Dots extends Component {
  render() {
    return (
      <details class="details-overlay details-reset position-relative d-inline-block js-dropdown-details " id="details-issuecomment-436644796">
      <summary class="btn-link timeline-comment-action" aria-haspopup="true" aria-label="Show options">
        <svg aria-label="Show options" class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg>
      </summary>
      <div class="dropdown-menu dropdown-menu-sw show-more-popover text-gray-dark anim-scale-in" role="menu">
        <clipboard-copy class="dropdown-item btn-link" for="issuecomment-436644796-permalink" aria-label="Copy link" data-toggle-for="details-issuecomment-436644796" role="menuitem" tabindex="0">
          Copy link
</clipboard-copy>

        <button type="button" class="dropdown-item btn-link d-none js-comment-quote-reply" data-toggle-for="details-issuecomment-436644796">
          Quote reply
</button>


        <details class="details-reset details-overlay details-overlay-dark lh-default text-gray-dark ">
          <summary class="dropdown-item" aria-haspopup="dialog">

            Open new issue
</summary>
          <details-dialog class="Box Box--overlay d-flex flex-column anim-fade-in fast " aria-label="Open new issue" role="dialog">
            <div class="Box-header">
              <button class="Box-btn-octicon btn-octicon float-right" type="button" aria-label="Close dialog" data-close-dialog="">
                <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"></path></svg>
              </button>
              <h3 class="Box-title">Open new issue</h3>
            </div>

            <div class="Box-body scrollable-overlay">


            </div>

          </details-dialog>
        </details>


      </div>
    </details>
                    
    );
  }
}

export default Detailed3Dots;