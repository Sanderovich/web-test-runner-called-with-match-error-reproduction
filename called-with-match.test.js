import { expect, use } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';

use(sinonChai);

describe('call-with-match', () => {
	it('stops working when errors', () => {
		const sinonSpy = spy();

		sinonSpy();

		expect(sinonSpy).to.be.calledWithMatch({ foo: 'bar' });
	});
});
