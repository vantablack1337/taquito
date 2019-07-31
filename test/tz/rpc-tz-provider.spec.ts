import { RpcTzProvider } from '../../src/tz/rpc-tz-provider'

describe('RpcTzProvider test', () => {
  it('is instantiable', () => {
    expect(new RpcTzProvider(null as any)).toBeInstanceOf(RpcTzProvider)
  })

  describe('getBalance', () => {
    it('calls get balance from the rpc client', async done => {
      const mockRpcClient = {
        getBalance: jest.fn()
      }

      mockRpcClient.getBalance.mockResolvedValue('10000')

      const provider = new RpcTzProvider(mockRpcClient as any)
      const result = await provider.getBalance('test-address')
      expect(result).toStrictEqual(10000)
      expect(mockRpcClient.getBalance.mock.calls[0][0]).toEqual('test-address')
      done()
    })
  })
})
