import React from 'react';
import Table from './table';

function Payments() {
  return (
    <section className="payments mt-5">
      <h2>Payments</h2>
      <div className="payments-header mt-3">
        <div className="payments-header-showing">
          <h4>Showing</h4>
          <div className="form-group">
            <select className="form-control" name="showing" id="showing">
              <option value="10">10</option>
              <option value="20" selected>20</option>
              <option value="30">30</option>
              <option value="40">40</option>
              <option value="50">50</option>
            </select>
          </div>
          <h4 className="text-right">out of 500 payments</h4>
        </div>
        <div className="payments-header-searchForm">
          <form>
            <i className="fa fa-search" aria-hidden="true"></i>
            <input type="search" name="search-table" placeholder="Search payments" />
          </form>
        </div>
        <div className="payments-header-status">
          <h4 className="mr-3">Show</h4>
          <div className="form-group">
            <select className="form-control" name="status" id="status">
              <option value="all">All</option>
              <option value="reconcilled">Reconcilled</option>
              <option value="unreconcilled">Un-reconcilled</option>
              <option value="settled">Settled</option>
              <option value="unsettled">Unsettled</option>
            </select>
          </div>
        </div>
      </div>
      <Table />
    </section>
  )
}

export default Payments;
