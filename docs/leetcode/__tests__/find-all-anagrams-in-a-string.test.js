import findAnagrams from '../find-all-anagrams-in-a-string';

test('findAnagrams "cbaebabacd" "abc"', () => {
  expect(findAnagrams('cbaebabacd', 'abc')).toStrictEqual([0, 6]);
});
test('findAnagrams "abab" "ab', () => {
  expect(findAnagrams('abab', 'ab')).toStrictEqual([0, 1, 2]);
});
