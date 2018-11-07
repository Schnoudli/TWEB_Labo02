import React, { Component } from 'react';
import './githubstyle1.css';
import './githubstyle2.css';


class IssueBody extends Component {
  render() {
    return (

      <div class="edit-comment-hide">
        <task-lists disabled="" sortable="">
          <table class="d-block">
            <tbody class="d-block">
              <tr class="d-block">
                <td class="d-block comment-body markdown-body  js-comment-body">

                  <p>A full reproducing project would be nice.</p>
                </td>
              </tr>
            </tbody>
          </table>
        </task-lists>
      </div>
    )
  }
}

export default IssueBody;