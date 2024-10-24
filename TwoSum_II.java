import java.util.Arrays;

class TwoSum_II {
    public static void main(String args[]){
         //Use Case 1
    int numbers[] = {2, 7, 11, 15};
    int target = 9;
    int result[]=twoSum(numbers, target);
    
    System.out.println(Arrays.toString(result));

    /* for(int k=0;k<result.length;k++){
        System.out.print(result[k]+" ");
    }*/

    }

    public static int[] twoSum(int[] numbers, int target) {
        int j = 0;
        int i = numbers.length-1;

        while(i!=j)
        {
            if((numbers[i] + numbers[j]) > target)
            {
                i--;
            }
            else if ((numbers[i] + numbers[j]) < target)
            {
                j++;
            }
            else if ((numbers[i] + numbers[j]) == target)
            {
                return new int[] {j+1, i+1};
                
            }
        }
    return new int[] {};
    }
   
}