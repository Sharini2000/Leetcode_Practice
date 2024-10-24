from collections import defaultdict
class Solution(object):
    def groupAnagrams(self, strs):
        """
        :type strs: List[str]
        :rtype: List[List[str]]
        """
        dict1 = defaultdict(list)

        for str in strs:
            key=''.join(sorted(str))
            dict1[key].append(str)

        return dict1.values()



#Test Case
strs = ["eat","tea","tan","ate","nat","bat"]
sol = Solution()
result = sol.groupAnagrams(strs)
print(result)